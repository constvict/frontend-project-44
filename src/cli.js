import readlineSync from 'readline-sync';

const greet = () => {
    let userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
}

export { greet };