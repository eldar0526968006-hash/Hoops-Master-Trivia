import React, { useState, useEffect } from 'react';
import { Background } from './components/Background';
import { HomeScreen } from './components/HomeScreen';
import { GameScreen } from './components/GameScreen';
import { EndScreen } from './components/EndScreen';
import { GameState, GameStats } from './types';
import { QUESTIONS_DB } from './constants';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.MENU);
  const [highScore, setHighScore] = useState(0);
  const [lastStats, setLastStats] = useState<GameStats | null>(null);
  const [isNewHighScore, setIsNewHighScore] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('hoopsMasterHighScore');
    if (stored) {
      setHighScore(parseInt(stored, 10));
    }
  }, []);

  const startGame = () => {
    setGameState(GameState.PLAYING);
    setLastStats(null);
    setIsNewHighScore(false);
  };

  const handleGameEnd = (stats: GameStats) => {
    let newHigh = false;
    if (stats.score > highScore) {
      setHighScore(stats.score);
      localStorage.setItem('hoopsMasterHighScore', stats.score.toString());
      newHigh = true;
    }
    setIsNewHighScore(newHigh);
    setLastStats(stats);
    setGameState(GameState.ENDED);
  };

  return (
    <div className="relative w-full h-screen text-white font-sans overflow-hidden" dir="rtl">
      <Background />

      <div className="relative z-10 h-full w-full flex flex-col">
        {gameState === GameState.MENU && (
          <HomeScreen 
            onStart={startGame} 
            highScore={highScore} 
          />
        )}

        {gameState === GameState.PLAYING && (
          <GameScreen 
            questions={QUESTIONS_DB} // Pass full DB, GameScreen handles selection logic
            onGameEnd={handleGameEnd} 
          />
        )}

        {gameState === GameState.ENDED && lastStats && (
          <EndScreen 
            stats={lastStats} 
            onRestart={startGame} 
            isNewHighScore={isNewHighScore}
            highScore={highScore}
          />
        )}
      </div>
    </div>
  );
};

export default App;