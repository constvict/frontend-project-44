import getRandom from '../getRandom.js';
import play from '../index.js';

const isEven = (num) => num % 2 === 0;
const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQA = () => {
  const question = getRandom(1, 10);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const playEven = () => {
  play(gameTask, getQA);
};

export default playEven;
