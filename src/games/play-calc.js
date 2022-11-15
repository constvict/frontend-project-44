import getRandom from '../getRandom.js';
import play from '../index.js';

const gameTask = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const getQA = () => {
  const num1 = getRandom(1, 25);
  const num2 = getRandom(1, 25);
  const operator = operators[getRandom(0, 2)];
  const question = `${num1} ${operator} ${num2}`;
  const answer = String(calculate(num1, num2, operator));
  return [question, answer];
};

const playCalc = () => {
  play(gameTask, getQA);
};

export default playCalc;
