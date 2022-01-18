'use strict'
//Promise
// point 1. State
//:프로세스가 무거운 operation을 수행하고 있는 중인지, 수행이 완료되어 성공했는지 아니면 실패했는지 상태에 대해서 이해가 필요.
// point 2. Producer vs Consumer
//:정보를 제공하는 Producer와 정보를 소비하는 Consumer
//Promise is a JavaScript Object for Asynchronous Operation.
//State: pending -> fulfilled or rejected

/*
var Promise: PromiseConstructor
new <any>(executor: (resolve: (value: any) => void, 
reject: (reason?: any) => void) => void) => Promise<any>
executor라는 callback function을 전달해줘야 한다. executor는 두 가지 callback function을 받는다.
첫번째 callback function은 resolve: 기능을 안정적으로 수행해서 최종 data를 전달한다. 
두번째 callback function은 기능을 수행하다가 중간에 문제가 생기면 호출하는 reject.
*/

//Promise 만들기
//1. Producer
//Promise는 class이기 때문에 new 키워드를 사용해 object를 생성할 수 있다.
//when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  //doing some heavy work (network, read files) 무거운 일을 처리할 때 동기적으로 처리하면
  //그 다음 line의 코드가 실행되지 않을 수 있으므로 시간이 조금 걸리는 일들은 promise로 비동기적으로 처리해주는 것이 좋다.
  console.log('doing something')
  setTimeout(() => {
    // resolve('skylar')
    reject(new Error('no network'))
  }, 2000)
})

//Promise 사용하기
//2. Consumers: then, catch , finally
//value라는 param은 promise producer가 잘 수행이 되어서 resolve callback function에 전달된 'skyalr'
// then을 이용해서 성공적인 case만 다뤘기 때문에 reject가 호출되면 Uncaught Error가 뜬다.
//resolve: skylar, reject: Uncaught(in promise) Error: no network
promise
  .then((value) => {
    console.log(value)
  })
  //Chaining
  //-then을 호출하게 되면 결국 promise가 호출이 되고, return된 promise에 catch를 등록.
  .catch((error) => {
    console.log(error) //reject된 error를 잡아와서 Error: no network가 출력.
  })
  //finally는 성공, 실패 여부와 상관 없이 무조건 호출된다.
  //성공, 실패와 상관없이 마지막으로 어떤 기능을 수행하고 싶을 때 finally를 사용한다.
  .finally(() => {
    console.log('finally')
  })

//Promise 연결하기
//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000)
})

fetchNumber //resolve에서 1 전달
  .then((num) => num * 2) //2
  .then((num) => num * 3) //6
  .then((num) => {
    //6 전달
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000) //5
    })
  })
  .then((num) => console.log(num)) //5
//소요시간은 2초.

//Promise 오류 처리
//4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000)
  })
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 🥚`), 1000)
  })
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000)
  })

getHen()
  // .then((hen) => getEgg(hen))
  //한 가지만 받아서 그대로 전달하는 경우에는 아래와 같이 생략해 작성이 가능하다.
  .then(getEgg)
  // .then((egg) => cook(egg))
  .then(cook)
  // .then((meal) => console.log(meal))
  .then(console.log)
//출력 소요시간은 3초
//출력 결과: 🐓 => 🥚 => 🍳
