
import type { OperatorDetails } from './types';

export const MAX_HISTORY_LENGTH = 10;
export const PRECISION = 12;

export const SCIENTIFIC_KEYS = [
  { display: '(', value: '(', type: 'fn' },
  { display: ')', value: ')', type: 'fn' },
  { display: 'π', value: 'π', type: 'fn' },
  { display: 'e', value: 'e', type: 'fn' },
  { display: 'x²', value: '^(2)', type: 'fn' },
  { display: 'xʸ', value: '^', type: 'operator' },
  { display: '√', value: '√(', type: 'fn' },
  { display: 'log', value: 'log(', type: 'fn' },
  { display: 'ln', value: 'ln(', type: 'fn' },
  { display: 'sin', value: 'sin(', type: 'fn' },
  { display: 'cos', value: 'cos(', type: 'fn' },
  { display: 'tan', value: 'tan(', type: 'fn' },
];

export const BASIC_KEYS = [
  { display: 'AC', value: 'AC', type: 'clear' },
  { display: 'C', value: 'C', type: 'clear' },
  { display: '%', value: '%', type: 'operator' },
  { display: '÷', value: '÷', type: 'operator' },
  { display: '7', value: '7', type: 'number' },
  { display: '8', value: '8', type: 'number' },
  { display: '9', value: '9', type: 'number' },
  { display: '×', value: '×', type: 'operator' },
  { display: '4', value: '4', type: 'number' },
  { display: '5', value: '5', type: 'number' },
  { display: '6', value: '6', type: 'number' },
  { display: '−', value: '−', type: 'operator' },
  { display: '1', value: '1', type: 'number' },
  { display: '2', value: '2', type: 'number' },
  { display: '3', value: '3', type: 'number' },
  { display: '+', value: '+', type: 'operator' },
  { display: '±', value: '±', type: 'fn' },
  { display: '0', value: '0', type: 'number' },
  { display: '.', value: '.', type: 'number' },
  { display: '=', value: '=', type: 'equals' },
];

export const OPERATORS: Record<string, OperatorDetails> = {
  '+': { precedence: 2, associativity: 'left' },
  '−': { precedence: 2, associativity: 'left' },
  '×': { precedence: 3, associativity: 'left' },
  '÷': { precedence: 3, associativity: 'left' },
  '%': { precedence: 3, associativity: 'left' },
  '^': { precedence: 4, associativity: 'right' },
};

export const FUNCTIONS = ['sin', 'cos', 'tan', 'ln', 'log', '√'];

export const KEYBOARD_MAP: Record<string, string> = {
  '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9',
  '.': '.',
  '+': '+', '-': '−', '*': '×', '/': '÷',
  '%': '%',
  '^': '^',
  '(': '(', ')': ')',
  'Enter': '=', '=': '=',
  'Backspace': 'C',
  'Delete': 'AC', 'Escape': 'AC',
  'p': 'π', 'e': 'e'
};
