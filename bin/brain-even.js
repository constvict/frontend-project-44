#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

const isEven = (num) => num % 2 === 0;

console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const getRandom = Math.floor(Math.random() * 10) + 1;
  const answer = isEven(getRandom) ? 'yes' : 'no';
  console.log(`Question: ${getRandom}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer !== answer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  } else {
    console.log('Correct!');
  }

  if (i === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
}
