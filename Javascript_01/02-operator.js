'use strict'
console.log()
//1. String concatenation(연속)
console.log('my' + 'cat')
console.log('1' + 2)
console.log(`string literals: 1 + 2 = ${1 + 2}`)
console.log(`string literals: 
''''
1 + 2 = ${1 + 2}`)
console.log("skylar's book")
console.log("skylar's \nbook")
console.log("skylar's \tbook")

//2. Numeric operatiors
console.log(1 + 1) //add
console.log(1 - 1) //minus
console.log(1 / 1) //divide
console.log(1 * 1) //multiply
console.log(5 % 2) //remainder
console.log(2 ** 3) //exponentiation(지수화)

//3.Increment(증가) and decrement operators

// preIncrement = counter;
// counter = counter + 1;
let counter = 2
const preIncrement = ++counter
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)
// preIncrement: 3, counter: 3

// postIncrement = couter;
// counter = counter +1;
const postIncrement = counter++
console.log(`postIncrement: ${preIncrement}, counter: ${counter}`)
// postIncrement: 3, counter:4

// preDecrement = counter;
// counter = counter -1;
const preDecrement = --counter
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`)
// preDecrement: 3, counter: 3

// postDecrement = counter;
// counter = counter -1;
const postDecrement = counter--
console.log(`postDecrement: ${postDecrement}, counter${counter}`)
// postDecrement: 3, counter:2

//4.Assigment operators
let x = 3
let y = 6
x += y
x -= y
x *= y
x /= y

//5. Comparison operators
console.log(10 < 6) //less than
console.log(10 <= 6) //less than or equal
console.log(10 > 6) //greater than
console.log(10 >= 6) //greater than or equal

//6. Logical operators : || (or), &&(and), !(not)
const value1 = false
const value2 = 4 < 2

// || (or), finds the first trythy value
console.log(`or: ${value1 || value2 || check()}`)

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`)

// often used to comparess long - if-statement
// nullableObject && nullableOject.somthing
// if (nullableObject != null) {
//   nullableObject.something
// }

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('😨')
  }
  return true
}

// !(not)
console.log(!value1) //true -> false, false -> true

//7. Equality
const stringFive = '5'
const numberFive = 5

// == loose equality, with type conversion(전환)
console.log(stringFive == numberFive) //true
console.log(stringFive != numberFive) //false

// === strict equality, no type conversion
console.log(stringFive === numberFive) //false
console.log(stringFive !== numberFive) //true

// object equality by reference
const skylar1 = { name: 'skylar' }
const skylar2 = { name: 'skylar' }
const skylar3 = skylar1
console.log(skylar1 == skylar2) //false
console.log(skylar1 === skylar2) //false
console.log(skylar1 === skylar3) //true
// equality - puzzler
console.log(0 == false) //true
console.log(0 === false) //false
console.log('' == false) //true
console.log('' === false) //false
console.log(null == undefined) //true
console.log(null === undefined) //false

//8. Conditional operator: if
// if, else if, else
const name = 'skylar'
if (name === 'skylar') {
  console.log('Welcome, Skylar!')
} else if (name === 'coder') {
  console.log('You are amazing coder')
} else {
  console.log('unknown')
}

//9. Ternary operator: ?
//condition ? value1 : value2;
console.log(name === 'skylar' ? 'yes' : 'no')

//10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE'
switch (browser) {
  case 'IE':
    console.log('go away!')
    break
  case 'Chrome':
    console.log('love you!')
    break
  case 'Firefox':
    console.log('love you!')
    break
  default:
    console.log('same all!')
    break
}

//11. Loops
// while loop, while the condition is truethy,
// body code is excuted.
let i = 3
while (i > 0) {
  console.log(`while: ${i}`)
  i--
}

// do while loop, body code is excuted first,
// than check the condition.
do {
  console.log(`do while: ${i}`)
  i--
} while (i > 0)

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i} `)
}

for (let i = 3; i > 0; i = i - 2) {
  //inline variale declaration
  console.log(`inline variable for: ${i}`)
}

// nested loops
// Avoid it possible because 'nested loop = O(n^2)'
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`)
  }
}

// break, continue
// Q1. iterate(반복) from 0 to 10 and print only even numbers(use continue)
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    continue
  }
  console.log(`even number: ${i}`)
}

// Q1-1. interate from 0 to 10 and print only even numbers(do not use continue)
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(`even number: ${i}`)
  }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8(use break)
for (let i = 0; i < 10; i++) {
  if (i > 8) {
    break
  }
  console.log(`0 to reaching 8: ${i}`)
}
