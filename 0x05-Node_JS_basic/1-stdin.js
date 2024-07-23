#!/usr/bin/env node
/**
 * Dsiplays and executes a program thorugh command line
 */
console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (input) => {
  const name = input.trim();
  console.log(`Your name is: ${name}`);

  console.log('This important software is now closing');
  process.exit();
});

process.on('SIGINT', () => {
  console.log('/nThis important software is now closing');
  process.exit();
});
