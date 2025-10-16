
export interface HistoryEntry {
  expression: string;
  result: string;
}

export type AngleMode = 'deg' | 'rad';

export type Theme = 'light' | 'dark';

export interface OperatorDetails {
  precedence: number;
  associativity: 'left' | 'right';
}
