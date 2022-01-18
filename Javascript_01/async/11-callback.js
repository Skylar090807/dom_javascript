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

console.log('--------------------------')

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

//Callback Hell example 💩
//user의 data를 backend server에서 받아오는 class가 있다고 가정해보자.
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if ((id === 'skylar' && password === '12345') || (id === 'alex' && password === '54321')) {
        onSuccess(id)
      } else {
        onError(new Error('not found'))
      }
    }, 2000)
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'skylar') {
        onSuccess({ name: 'skylar', role: 'admin' })
      } else {
        onError(new Error('no access'))
      }
    }, 1000)
  }
}
//<실전문제> 위 class UserStorage를 이용해서
// 1️⃣ 사용자에게 id, password를 입력 받아온다.
// 2️⃣ login을 한다
// 3️⃣ login 성공한 id를 요청해서 role을 받아온다.
// 4️⃣ role에 요청해 사용자의 id와 role을 출력한다.

//callback hell version 💩
//아래와 같이 callback에 callback을 거듭하면 가독성도 떨어지고 디버깅도 어렵다.
const userLogin = new UserStorage()
const id = prompt('enter your 🆔')
const password = prompt('enter your Password 🕵🏻‍♀️')
userLogin.loginUser(
  id,
  password,
  (user) => {
    userLogin.getRoles(
      user,
      (userWithRole) => {
        alert(`${userWithRole.name} Login Succeeded, Your role is ${userWithRole.role}`)
      },
      (error) => {
        console.log(error)
      },
    )
  },
  (error) => {
    console.log(error)
  },
)
