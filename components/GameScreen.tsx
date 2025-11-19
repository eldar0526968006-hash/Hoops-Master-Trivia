import React, { useState, useEffect, useRef } from 'react';
import { Question, GameStats, Difficulty } from '../types';
import { SCORING_RULES } from '../constants';
import { Flame, Clock, Activity } from 'lucide-react';

interface GameScreenProps {
  questions: Question[]; // Receives ALL questions now
  onGameEnd: (finalStats: GameStats) => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({ questions, onGameEnd }) => {
  // Game Logic State
  const [playedQuestions, setPlayedQuestions] = useState<number[]>([]); // Array of IDs
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(SCORING_RULES.TIME_LIMIT_SECONDS);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [timedOut, setTimedOut] = useState(false);
  
  // Stats State
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [timeoutCount, setTimeoutCount] = useState(0);
  const [streak, setStreak] = useState(0);

  const timerRef = useRef<number | null>(null);

  // Initialize First Question
  useEffect(() => {
    pickNextQuestion(0, []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Timer Logic
  useEffect(() => {
    if (isTransitioning || !currentQuestion) return;

    setTimeLeft(SCORING_RULES.TIME_LIMIT_SECONDS);
    setTimedOut(false);
    
    timerRef.current = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestion, isTransitioning]);

  // --- CORE LOGIC: PICK NEXT QUESTION ---
  const pickNextQuestion = (currentStreak: number, usedIds: number[]) => {
    const questionsPlayedCount = usedIds.length;

    // 1. Check Game Over Condition
    if (questionsPlayedCount >= SCORING_RULES.QUESTIONS_PER_GAME) {
      onGameEnd({
        score,
        correctCount,
        wrongCount,
        timeoutCount,
        streak: currentStreak, 
        highScore: 0 
      });
      return;
    }

    // 2. Filter Unused Questions
    let availableQuestions = questions.filter(q => !usedIds.includes(q.id));
    
    if (availableQuestions.length === 0) {
       // Fallback if DB is smaller than game length (shouldn't happen with new DB)
       onGameEnd({ score, correctCount, wrongCount, timeoutCount, streak: currentStreak, highScore: 0 });
       return;
    }

    // 3. Dynamic Difficulty Logic
    // If streak >= 3, force HARD questions until wrong
    if (currentStreak >= SCORING_RULES.STREAK_THRESHOLD) {
      const hardQuestions = availableQuestions.filter(q => q.difficulty === Difficulty.HARD);
      if (hardQuestions.length > 0) {
        availableQuestions = hardQuestions;
      }
      // If no HARD questions left, it falls back to whatever is available
    }

    // 4. Random Selection from Pool
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const nextQ = availableQuestions[randomIndex];

    setCurrentQuestion(nextQ);
    setPlayedQuestions([...usedIds, nextQ.id]);
    setIsTransitioning(false);
    setSelectedAnswer(null);
    setTimedOut(false);
  };

  const handleTimeout = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsTransitioning(true);
    setTimedOut(true);
    setTimeoutCount(prev => prev + 1);
    
    // Timeout counts as wrong -> reset streak
    const newStreak = 0;
    setStreak(newStreak);
    
    setTimeout(() => {
      if (currentQuestion) {
         // Pass current played list to avoid race conditions with state
         pickNextQuestion(newStreak, playedQuestions); 
      }
    }, 2500);
  };

  const handleAnswerClick = (index: number) => {
    if (isTransitioning || selectedAnswer !== null || !currentQuestion) return;
    if (timerRef.current) clearInterval(timerRef.current);
    
    setSelectedAnswer(index);
    setIsTransitioning(true);

    const isCorrect = index === currentQuestion.correctAnswerIndex;
    let newStreak = streak;

    if (isCorrect) {
      let points = SCORING_RULES[currentQuestion.difficulty];
      newStreak = streak + 1;
      setStreak(newStreak);
      
      // Bonus for streaks
      if (newStreak > 0 && newStreak % SCORING_RULES.STREAK_THRESHOLD === 0) {
        points += SCORING_RULES.STREAK_BONUS;
      }
      
      setScore(prev => prev + points);
      setCorrectCount(prev => prev + 1);
    } else {
      newStreak = 0;
      setStreak(0);
      setWrongCount(prev => prev + 1);
    }

    setTimeout(() => {
       pickNextQuestion(newStreak, playedQuestions);
    }, 1500);
  };

  const progressPercent = (timeLeft / SCORING_RULES.TIME_LIMIT_SECONDS) * 100;

  if (!currentQuestion) return <div className="flex justify-center items-center h-full text-hoops-orange">Loading...</div>;

  return (
    <div className="flex flex-col h-full w-full max-w-6xl mx-auto px-4 py-4 md:py-6 relative z-10 overflow-y-auto md:overflow-hidden">
      
      {/* HUD (Heads Up Display) */}
      <div className="flex items-center justify-between mb-6 md:mb-8 glass-panel rounded-full p-2 px-4 md:p-3 md:px-6 shadow-lg sticky top-0 z-30 backdrop-blur-xl">
        
        {/* Score */}
        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
          <span className="text-[10px] md:text-xs font-tech text-gray-400 uppercase tracking-wider">SCORE</span>
          <span className="text-2xl md:text-3xl font-scoreboard text-white leading-none">{score.toLocaleString()}</span>
        </div>

        {/* Streak */}
        <div className="flex items-center gap-2">
          <div className={`transition-all duration-500 ${streak > 2 ? 'text-hoops-orange scale-125' : 'text-gray-600'}`}>
            <Flame fill={streak > 2 ? "currentColor" : "none"} size={20} className="md:w-6 md:h-6" />
          </div>
          <div className="h-6 md:h-8 w-[1px] bg-gray-700 mx-1 md:mx-2"></div>
          <Activity size={18} className="text-hoops-orange animate-pulse md:w-5 md:h-5" />
        </div>

        {/* Timer */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-16 md:w-32 h-1.5 md:h-2 bg-gray-800 rounded-full overflow-hidden block">
            <div 
              className={`h-full ${timeLeft < 5 ? 'bg-red-500' : 'bg-hoops-orange'} transition-all duration-1000 ease-linear`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className={`text-2xl md:text-3xl font-scoreboard w-8 md:w-12 text-center ${timeLeft < 5 ? 'text-red-500' : 'text-white'}`}>
            {timeLeft}
          </span>
        </div>
      </div>

      {/* Main Game Area */}
      <div className="flex-grow flex flex-col justify-center gap-4 md:gap-6 mt-4 md:mt-0 pb-4">
        
        {/* Question Card */}
        <div className="w-full flex justify-center pt-4"> {/* Added pt-4 for floating tags space */}
            <div className={`
                relative w-full max-w-4xl
                glass-panel border-0
                rounded-3xl
                p-6 pt-8 md:p-12 md:pt-12
                flex flex-col items-center justify-center text-center
                transition-all duration-500
                shadow-[0_0_30px_rgba(0,0,0,0.5)] md:shadow-[0_0_50px_rgba(0,0,0,0.5)]
                group
                ${timedOut ? 'border-b-4 border-red-600' : 'border-b-4 border-hoops-orange'}
            `}>
                {/* Decorative lines */}
                <div className="absolute top-0 left-4 md:left-10 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                <div className="absolute top-0 right-4 md:right-10 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                
                {/* Metadata Tags - Floating on Top Border */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex gap-3 z-20 w-max">
                    <span className="px-4 py-1.5 rounded-full bg-hoops-card border border-hoops-orange text-xs md:text-lg font-modern font-bold uppercase text-hoops-orange tracking-wide shadow-[0_0_15px_rgba(255,85,0,0.3)]">
                        {currentQuestion.category}
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-hoops-card border border-white/20 text-xs md:text-lg font-modern font-bold uppercase text-gray-300 tracking-wide shadow-lg">
                        {currentQuestion.difficulty}
                    </span>
                </div>

                <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-white leading-tight md:leading-snug drop-shadow-md font-modern mt-2 md:mt-0">
                    {currentQuestion.questionText}
                </h2>

                {timedOut && (
                    <div className="mt-4 md:mt-6 text-red-500 font-scoreboard text-xl md:text-2xl animate-bounce">
                        TIME'S UP!
                    </div>
                )}
            </div>
        </div>

        {/* Answers Grid */}
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-2 md:mt-4">
          {currentQuestion.answers.map((answer, idx) => {
            let stateClass = "bg-hoops-card/80 border-white/5 hover:border-hoops-orange hover:bg-hoops-card"; // Default
            let textClass = "text-gray-300";
            
            if (isTransitioning) {
               if (idx === currentQuestion.correctAnswerIndex) {
                 stateClass = "bg-green-600/90 border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.4)] scale-[1.02]";
                 textClass = "text-white";
               } else if (selectedAnswer === idx) {
                 stateClass = "bg-red-600/90 border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.4)]";
                 textClass = "text-white";
               } else {
                 stateClass = "bg-black/20 border-transparent opacity-30 grayscale";
               }
            }

            return (
              <button
                key={idx}
                disabled={isTransitioning}
                onClick={() => handleAnswerClick(idx)}
                className={`
                  group relative overflow-hidden
                  p-4 md:p-6 rounded-2xl border 
                  transition-all duration-300 ease-out
                  flex items-center justify-center
                  min-h-[80px] md:min-h-[100px]
                  ${stateClass}
                  ${!isTransitioning && 'active:scale-[0.98]'}
                `}
              >
                {/* Hover Gradient Effect */}
                {!isTransitioning && (
                    <div className="absolute inset-0 bg-gradient-to-r from-hoops-orange/0 via-hoops-orange/10 to-hoops-orange/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                )}
                
                <span className={`relative z-10 text-lg md:text-2xl font-modern font-medium tracking-wide text-center ${textClass}`}>
                  {answer}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      
      <div className="text-center text-gray-600 font-tech text-[10px] md:text-xs mt-auto mb-2">
         QUESTION {playedQuestions.length} OF {SCORING_RULES.QUESTIONS_PER_GAME}
      </div>
    </div>
  );
};