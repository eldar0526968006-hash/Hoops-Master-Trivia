export enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

export interface Question {
  id: number;
  category: string;
  year: number;
  difficulty: Difficulty;
  questionText: string;
  answers: string[]; // Always 4 options
  correctAnswerIndex: number;
  explanation: string;
}

export interface GameStats {
  score: number;
  correctCount: number;
  wrongCount: number;
  timeoutCount: number;
  streak: number;
  highScore: number;
}

export enum GameState {
  MENU = 'MENU',
  PLAYING = 'PLAYING',
  ENDED = 'ENDED',
}