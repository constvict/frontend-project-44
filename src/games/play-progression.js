import getRandom from '../utils.js';
import play from '../index.js';

const description = 'What number is missing in the progression?';

const makeProgression = (firstNumber, progressionLength, stepProgression) => {
  const progression = [firstNumber];
  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + stepProgression;
  }
  return progression;
};

const getAnswerAndQuestion = () => {
  const progressionLength = getRandom(5, 15);
  const firstNumber = getRandom(1, 15);
  const stepProgression = getRandom(1, 10);
  const getRandomIndex = getRandom(0, progressionLength - 1);
  const progression = makeProgression(firstNumber, progressionLength, stepProgression);
  const copyOfProgression = [...progression];
  copyOfProgression[getRandomIndex] = '..';
  const question = String(copyOfProgression.join(' '));
  const answer = String(progression[getRandomIndex]);
  return [question, answer];
};

const playProgression = () => {
  play(description, getAnswerAndQuestion);
};

export default playProgression;
