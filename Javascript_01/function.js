//Function
//-fundamental building block in the program
//-subprogram can be used multiple times
//-performs a task or claculates a value

//1.Function declaration
//function name(param1, param2) {body... return;}
//one function === one thing
//naming: doSomething, command, verb
//e.g. createCardAndPoint -> createCard, createPoint
//function is object in JS
function printHello() {
  console.log('Hello')
  return undefined //생략가능
}
printHello()

function log(message) {
  console.log(message)
}
log('Hello!')

//2. Parameters
//premitive parameters: passed by value
//object parameters: passed by reference
function changeName(obj) {
  obj.name = 'coder'
}
const skylar = { name: 'skylar' }
changeName(skylar)
console.log(skylar)

// 3.Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`)
}
showMessage('Hi!')

// 4.Rest parameters (added in ES6)
function printAll(...args) {
  //... = rest parameter(Array)
  for (let i = 0; i < args.length; i++) {
    console.log(args[i])
  }

  //simple for loop version
  for (const arg of args) {
    console.log(arg)
  }

  //forEach version
  args.forEach((arg) => console.log(arg))
}
printAll('apple', 'banana', 'tamato')

//5. Local scope {} 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
let globalMessage = 'global' //global veriable
function printMessage() {
  let message = 'hello'
  console.log(message) //local variable
  console.log(globalMessage)
  function printAnother() {
    console.log(message)
    let childmessage = 'hello!'
    console.log(printAnother)
  }
}
printMessage()

//6. Return a value
function sum(a, b) {
  return a + b
}
const result = sum(1, 2) //3
console.log(`sum: ${sum(1, 2)}`)

//7. Early return, early exit
//bad
function upgradeUser(user) {
  if (user.point > 10) {
    //long upgrade logic...
  }
}
//good
function upgradeUser(user) {
  if (user.point <= 10) {
    return
  }
  //long upgrade logic...
}

//First-class function
//function are treated like any other variable
//can be assigned as a value to variable
//can be passed as an argument to other function.
//can be returned by another function

//1. Function expression
//a function declaration can be called ealier than it is defined. (hoisted)
//a function expression is created when the execution reaches it.
const print = function () {
  //anonymous function
  console.log('print')
}
print()
const printAgain = print
printAgain()
const sumAgain = sum
console.log(sumAgain(1, 3))

//2. Callback function using function expresstion
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes()
  } else {
    printNo()
  }
}
//anonymous function
const printYes = function () {
  console.log('yes!')
}

//named function
//better debugging in debugger's stack traces
const printNo = function print() {
  console.log('no!')
  //print()   //recursions
}
randomQuiz('wrong', printYes, printNo)
randomQuiz('love you', printYes, printNo)

//Arrow function
//always anonymous
const simplePrint = function () {
  console.log('SimplePrint!')
}
//위 함수를 아래처럼 => 써서 한 줄로 표현.
const simplePrint = () => console.log('simplePrint!')
const add = (a, b) => a + b
const simpleMultiply = (a, b) => {
  //do something more
  return a * b
}

//IIFE: Immdeiately Invoked Function Expression
;(function hello() {
  console.log('IIFE')
})()

//Quiz
//function claculate(command, a, b)
//command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b
    case 'substract':
      return a - b
    case 'divide':
      return a / b
    case 'multiply':
      return a * b
    case 'remainder':
      return a % b
    default:
      throw Error('unknown command')
  }
}
