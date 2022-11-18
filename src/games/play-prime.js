import getRandom from '../getRandom.js';
import play from '../index.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const sqrtNumber = Math.sqrt(number);
  for (let i = 2; i <= sqrtNumber; i += 1) {
    if (number % i === 0) return false;
  }

  return number > 1;
};

const getQA = () => {
  const question = getRandom(1, 50);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const playPrime = () => {
  play(gameTask, getQA);
};

export default playPrime;
