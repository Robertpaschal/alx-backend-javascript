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

`mandatory`
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
`mandatory`
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
`mandatory`
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

+ [x] **3. Spies**<br/>
`mandatory`
Spies are a useful wrapper that will execute the wrapped function, and log useful information (e.g. was it called, with what arguments). Sinon is a library allowing you to create spies.

**Let’s install Sinon with npm:**

+ Create a new file named `utils.js`
+ Create a new module named `Utils`
+ Create a property named `calculateNumber` and paste your previous code in the function
+ Export the Utils module

+ [x] **Create a new file named**<br/> [3-payment.js](3-payment.js):

+ Create a new function named `sendPaymentRequestToApi`. The function takes two argument `totalAmount`, and `totalShipping`
+ The function calls the `Utils.calculateNumber` function with type `SUM`, `totalAmount` as `a`, `totalShipping` as `b` and display in the console the message `The total is: <result of the sum>`

+ [x] **Create a new file named** `3-payment.test.js` **and add a new suite named** `sendPaymentRequestToApi`**:**<br/>

+ By using `sinon.spy`, make sure the math used for `sendPaymentRequestToApi(100, 20)` is the same as `Utils.calculateNumber('SUM', 100, 20)` (validate the usage of the `Utils` function)

+[x] **Requirements:**

+ You should be able to run the test suite using `npm test 3-payment.test.js`
+ Every test should pass without any warning
+ You should use a `spy` to complete this exercise

+[x]**Tips:**

+ Remember to always restore a spy after using it in a test, it will prevent you from having weird behaviors
+ Spies are really useful and allow you to focus only on what your code is doing and not the downstream APIs or functions
+ Remember that integration test is different from unit test. Your unit test should test your code, not the code of a different function

+[x]**4. Stubs**<br/>
`mandatory`
Stubs are similar to spies. Except that you can provide a different implementation of the function you are wrapping. Sinon can be used as well for stubs.
**Create a new file [4-payment.js](4-payment.js), and copy the code from [3-payment.js](3-payment.js)** (same content, same behavior)

**Create a new file [4-payment.test.js](4-payment.test.js), and copy the code from [3-payment.test.js](3-payment.test.js)**

+ Imagine that calling the function `Utils.calculateNumber` is actually calling an API or a very expensive method. You don’t necessarily want to do that on every test run
+ Stub the function `Utils.calculateNumber` to always return the same number `10`
+ Verify that the stub is being called with `type = SUM`, `a = 100`, and `b = 20`
+ Add a spy to verify that `console.log` is logging the correct message `The total is: 10`

**Requirements:**<br/>
+ You should be able to run the test suite using `npm test 4-payment.test.js`
+ Every test should pass without any warning
+ You should use a `stub` to complete this exercise
+ Do not forget to restore the spy and the stub

**Tips:**<br/>
+ Using stubs allows you to greatly speed up your test. When executing thousands of tests, saving a few seconds is important
+ Using stubs allows you to control specific edge case (e.g a function throwing an error or returning a specific result like a number or a timestamp)