import React from 'react';
import { GameStats } from '../types';
import { RefreshCw, Trophy, XCircle, CheckCircle, Clock } from 'lucide-react';

interface EndScreenProps {
  stats: GameStats;
  onRestart: () => void;
  isNewHighScore: boolean;
  highScore: number;
}

export const EndScreen: React.FC<EndScreenProps> = ({ stats, onRestart, isNewHighScore, highScore }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-4 md:px-6 animate-fade-in relative z-10 overflow-y-auto">
      
      <h2 className="text-5xl md:text-7xl font-scoreboard text-white mb-6 md:mb-8 uppercase tracking-widest drop-shadow-lg text-center mt-4">
        Game Over
      </h2>

      {/* Main Score Card */}
      <div className="w-full max-w-sm md:max-w-md glass-panel rounded-2xl p-6 md:p-8 mb-6 md:mb-8 shadow-[0_0_60px_rgba(255,85,0,0.15)] relative overflow-hidden">
        
        {isNewHighScore && (
          <div className="absolute top-0 left-0 w-full bg-hoops-orange text-white text-center py-1 font-bold text-xs md:text-sm tracking-widest animate-pulse">
            NEW HIGH SCORE!
          </div>
        )}

        <div className="flex flex-col items-center justify-center py-4 md:py-6">
          <span className="text-hoops-orange text-sm md:text-lg font-tech tracking-[0.2em] mb-2 uppercase">Final Score</span>
          <span className="text-7xl md:text-8xl font-scoreboard text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
            {stats.score}
          </span>
          {/* All-time high score display */}
          <div className="mt-2 flex items-center gap-2 opacity-60">
             <Trophy size={12} className="text-gray-400 md:w-3.5 md:h-3.5" />
             <span className="text-xs md:text-sm font-modern text-gray-400 uppercase tracking-wider">Best: {highScore}</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2 md:gap-4 border-t border-white/10 pt-4 md:pt-6">
          <div className="flex flex-col items-center">
            <CheckCircle size={20} className="text-green-500 mb-1 md:mb-2 md:w-6 md:h-6" />
            <span className="text-xl md:text-2xl font-scoreboard text-white">{stats.correctCount}</span>
            <span className="text-[8px] md:text-[10px] uppercase text-gray-500 font-tech">Correct</span>
          </div>
          <div className="flex flex-col items-center">
            <XCircle size={20} className="text-red-500 mb-1 md:mb-2 md:w-6 md:h-6" />
            <span className="text-xl md:text-2xl font-scoreboard text-white">{stats.wrongCount}</span>
            <span className="text-[8px] md:text-[10px] uppercase text-gray-500 font-tech">Wrong</span>
          </div>
          <div className="flex flex-col items-center">
            <Clock size={20} className="text-yellow-500 mb-1 md:mb-2 md:w-6 md:h-6" />
            <span className="text-xl md:text-2xl font-scoreboard text-white">{stats.timeoutCount}</span>
            <span className="text-[8px] md:text-[10px] uppercase text-gray-500 font-tech">Timeouts</span>
          </div>
        </div>
      </div>

      {/* Play Again Button */}
      <button
        onClick={onRestart}
        className="group bg-hoops-orange hover:bg-orange-600 text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 md:gap-3 mb-4"
      >
        <RefreshCw size={20} className="group-hover:rotate-180 transition-transform duration-500 md:w-6 md:h-6" />
        <span className="text-xl md:text-2xl font-scoreboard tracking-wide pt-1">PLAY AGAIN</span>
      </button>

    </div>
  );
};