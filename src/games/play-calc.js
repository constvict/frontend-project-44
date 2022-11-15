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
  const randomNumber1 = getRandom(1, 25);
  const randomNumber2 = getRandom(1, 25);
  const operator = operators[getRandom(0, 2)];
  const question = `${randomNumber1} ${operator} ${randomNumber2}`;
  const answer = String(calculate(randomNumber1, randomNumber2, operator));
  return [question, answer];
};

const playCalc = () => {
  play(gameTask, getQA);
};

export default playCalc;
