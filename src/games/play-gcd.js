import getRandom from '../utils.js';
import play from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (value1, value2) => {
  let a = value1;
  let b = value2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const getAnswerAndQuestion = () => {
  const randomNumber1 = getRandom(1, 100);
  const randomNumber2 = getRandom(1, 100);
  const question = `${randomNumber1} ${randomNumber2}`;
  const answer = String(getGcd(randomNumber1, randomNumber2));
  return [question, answer];
};

const playGcd = () => {
  play(description, getAnswerAndQuestion);
};

export default playGcd;
