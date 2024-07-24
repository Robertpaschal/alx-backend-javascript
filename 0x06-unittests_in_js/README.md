# Unittest in JavaScript

In this project, I dove deep into unittesting in Javascript. At the end of this project, I covered the following **learning Objectives:**
*1.* How to use Mocha to write a test suite
*2.* How to use different assertion libraries (Node or Chai)
*3.* How to present long test suites
*4.* When and how to use spies
*5.* When and how to use stubs
*6.* What are hooks and when to use them
*7.* Unit testing with Async functions
*8.* How to write integration tests with a small node server

## Tasks Completed
+ [x] 0. **Basic test with Mocha and Node assertion library**<br/>

mandatory
+ [x]Install Mocha using npm:

+ Set up a scripts in your `package.json` to quickly run Mocha using `npm test`
+ You have to use assert

+ [x] Create a new file named [0-calcul.js](0-calcul.js):

+ Create a function named calculateNumber. It should accepts two arguments (number) a and b
+ The function should round a and b and return the sum of it

+ [x] Test cases

+ Create a file 0-calcul.test.js that contains test cases of this function
+ You can assume a and b are always number
+ Tests should be around the “rounded” part

+ [x] Tips:

+ For the sake of the example, this test suite is slightly extreme and probably not needed
+ However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases

+ [x] Requirements:

+ You have to use `assert`
+ You should be able to run the test suite using npm test `0-calcul.test.js`
Every test should pass without any warning

+ [x] Expected output
```sh
> const calculateNumber = require("./0-calcul.js");
> calculateNumber(1, 3)
4
> calculateNumber(1, 3.7)
5
> calculateNumber(1.2, 3.7)
5
> calculateNumber(1.5, 3.7)
6
> 
```
+ [x] Run test
```sh
bob@dylan:~$ npm test 0-calcul.test.js 

> task_0@1.0.0 test /root
> ./node_modules/mocha/bin/mocha "0-calcul.test.js"

  calculateNumber
    ✓ ...
    ✓ ...
    ✓ ...
    ...

  130 passing (35ms)
bob@dylan:~$ 
```

+ [x] 1. **Combining descriptions**<br/>[1-calcul.js](1-calcul.js)[1-calcul.test.js](1-calcul.test.js)
mandatory
+ [x] Create a new file named 1-calcul.js:

+ Upgrade the function you created in the previous task (`0-calcul.js`)
+ Add a new argument named type at first argument of the function. `type` can be `SUM`, `SUBTRACT`, or `DIVIDE` (string)
+ When type is `SUM`, round the two numbers, and add `a` and `b`
+ When type is `SUBTRACT`, round the two numbers, and subtract `b` from `a`
+ When type is `DIVIDE`, round the two numbers, and divide `a` with `b` - if the rounded value of `b` is equal to 0, return the string `Error`
+ [x] Test cases

+ Create a file `1-calcul.test.js` that contains test cases of this function
+ You can assume `a` and `b` are always number
+ Usage of `describe` will help you to organize your test cases
+ [x] Tips:

+ For the sake of the example, this test suite is slightly extreme and probably not needed
+ However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases
+ [x] Requirements:

+ You have to use `assert`
+ You should be able to run the test suite using `npm test 1-calcul.test.js`
+ Every test should pass without any warning

+[x] Expected output
```sh
> const calculateNumber = require("./1-calcul.js");
> calculateNumber('SUM', 1.4, 4.5)
6
> calculateNumber('SUBTRACT', 1.4, 4.5)
-4
> calculateNumber('DIVIDE', 1.4, 4.5)
0.2
> calculateNumber('DIVIDE', 1.4, 0)
'Error'
```

+ [x] **2. Basic test using Chai assertion library**<br/>
mandatory
While using Node assert library is completely valid, a lot of developers prefer to have a behavior driven development style. This type being easier to read and therefore to maintain.

+ [x] **Let’s install Chai with npm:**<br/>

+ Copy the file `1-calcul.js` in a new file [2-calcul_chai.js](2-calcul_chai.js) (same content, same behavior)
+ Copy the file `1-calcul.test.js` in a new file [2-calcul_chai.test.js](2-calcul_chai.test.js)
+ Rewrite the test suite, using `expect` from `Chai`

**Tips:**<br/>

+ Remember that test coverage is always difficult to maintain. Using an easier style for your tests will help you
+ The easier your tests are to read and understand, the more other engineers will be able to fix them when they are modifying your code
**Requirements:**<br/>

+ You should be able to run the test suite using `npm test 2-calcul_chai.test.js`
+ Every test should pass without any warning