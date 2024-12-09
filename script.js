// ⛳️
function sayHello() {
  console.log('Hello, World!');
}

sayHello();
sayHello();
sayHello();

// ⛳️
function sayHelloTo(userName) {
  console.log(`Hello ${userName}!`);
}

sayHelloTo('Craig');
sayHelloTo('Dave');
sayHelloTo('John');

// ⛳️
function aboutPerson(name, age, location) {
  console.log(
    `My name is ${name}, I am ${age} years old and I live in ${location}`
  );
}

aboutPerson('Craig', 39, 'Midlands');
aboutPerson('Bob', 63, 'Scotland');

// ⛳️
function add(a, b) {
  return a + b;
}

const sum = add(7, 10);
console.log('The function result is', sum);
const anotherResult = add(2, 10);
console.log('Another result is', anotherResult);

function subtract(a, b) {
  return a - b;
}
console.log('subtract', subtract(10, 7));

function multiply(a, b) {
  return a * b;
}
console.log('multiply', multiply(10, 7));

function divide(a, b) {
  return a / b;
}
console.log('divide', divide(10, 7));

// ⛳️
// i do already know condtionals, but i realise that operators parameters are trickling
// down to the other functions, instead of putting numbers directly in the add, or subtracct functions
// and we have to return the add, subtract, multiply and divide functions if we want to store the answer into varibale for later
function calculate(a, b, operator) {
  if (operator === '+') {
    return add(a, b);
  } else if (operator === '-') {
    return subtract(a, b);
  } else if (operator === '*') {
    return multiply(a, b);
  } else if (operator === '/') {
    return divide(a, b);
  } else {
    return 'Invalid operator';
  }
}
// I add an else for if user put an opertor that wasnt on the list

const resAdd = calculate(3, 9, '+');
console.log(resAdd);

const resSubtract = calculate(4, 1, '-');
console.log(resSubtract);

const resMultiply = calculate(9, 9, '*');
console.log(resMultiply);

const resDivide = calculate(81, 9, '/');
console.log(resDivide);

const wrongInput = calculate(9, 9, '?');
console.log(wrongInput);
