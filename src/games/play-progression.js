import getRandom from '../getRandom.js';
import play from '../index.js';

const gameTask = 'What number is missing in the progression?';

const progressionLength = getRandom(5, 15);
const makeProgression = () => {
  const firstNumber = getRandom(1, 15);
  const progression = [firstNumber];
  const stepProgression = getRandom(1, 10);
  const getRandomIndex = getRandom(0, progressionLength - 1);
  let guessProgression = `${getRandomIndex === 0 ? '..' : firstNumber}`;
  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + stepProgression;
    guessProgression += i === getRandomIndex ? ' ..' : ` ${progression[i]}`;
  }
  return [guessProgression, String(progression[getRandomIndex])];
};

const getQA = () => makeProgression();

const playProgression = () => {
  play(gameTask, getQA);
};

export default playProgression;
