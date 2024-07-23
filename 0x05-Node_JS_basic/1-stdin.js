#!/usr/bin/env node
/**
 * Dsiplays and executes a program thorugh command line
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (input) => {
  const name = input.trim();
  if (name) {
    process.stdout.write(`Your name is: ${name}\n`);
  }
});

process.on('SIGINT', () => {
  process.stdout.write('/nThis important software is now closing\n');
  process.exit();
});
