#!/usr/bin/env node
/**
 * Dsiplays and executes a program thorugh command line
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (input) => {
  const name = input.trim();
  process.stdout.write(`Your name is: ${name}\n`);

  process.stdout.write('This important software is now closing\n');
  process.exit();
});

process.on('SIGINT', () => {
  process.stoout.write('/nThis important software is now closing\n');
  process.exit();
});
