'use strict'
//Synchronous and Asynchronous 동기와 비동기 ⭐️
// Synchronous: Execute the code block in order after hoisting
//hoisting이 된 이후 작성한 코드가 순서에 맞춰서 하나씩 동기적으로 실행.
// Asynchronous: 작성한 코드가 언제 실행 될지 알 수 없다. 코드 작성 순서에 상관 없이 비동기적으로 실행.

//JavaScript is Synchronous.

//hoisting: var, function declaration

//Synchronous example 🟣
console.log('1')
console.log('2')
console.log('3')
//출력 결과: 1
//         2
//         3

//Asynchronous example 🟣
console.log('1')
/*
web API
function setTimeout(handler: TimerHandler, 
  timeout?: number | undefined, ...arguments: any[]): number
*/
// setTimeout(function () {
//   console.log('2')
// }, 1000)
//arrow function 👇🏻
setTimeout(() => console.log('2'), 1000)
console.log('3')
//출력 결과: 1
//         3
//         2

//Callback ⭐️

//Synchronous callback 🟣
function printImmediately(print) {
  print()
}
printImmediately(() => console.log('hello'))
//출력 결과: 1
//         3
//         hello
//         2
//2는 setTimeout 1초를 설정해두었으므로 1초 뒤 제일 마지막에 출력,
//동기적으로1, 3을 출력한 뒤 hoisting된 function은 hello가 출력된다.

//Asynchronous callback 🟣
function printWithDelay(print, timeout) {
  setTimeout(print, timeout)
}
printWithDelay(() => console.log('async callback'), 2000)
//출력 결과: 1
//         3
//         hello
//         2
//         async callback
