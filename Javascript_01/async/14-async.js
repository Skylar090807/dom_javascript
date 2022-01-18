'use strict'
//async & await
//clear style of using promise

//1. 키워드 async
//fechUser Promise로 작성 ☼
function fetchUserPromise() {
  //do network request in 10 secs...
  //네트워크 통신으로 backend에서 data를 받아오는데 10초 걸리는 코드가 있다고 가정한다.

  return new Promise((resolve, reject) => {
    resolve('skylar')
  })
}
const user = fetchUserPromise()
user.then(console.log)
console.log(user)
/*
출력 결과:
Promise {<fulfilled>: 'skylar'}
*/

//fetchUser async로 작성 ☼
//function 앞에 async 키워드를 붙여주면 promise로 변환된다.
async function fetchUserAsync() {
  return 'alex'
}
const user2 = fetchUserAsync()
user.then(console.log)
console.log(user2)
/*
출력 결과:
Promise {<fulfilled>: 'alex'}
*/

//2. await ✨
//키워드 await은 async 키워드가 붙은 함수 안에서만 쓸 수 있다.
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function getChick() {
  await delay(2000)
  return '🐣'
}

async function getPuppy() {
  await delay(1000)
  return '🐶'
}
//getPoppy() promise로 작성
// function getPuppy() {
//   return delay(3000)
//   .then(() => '🐶')
// }

//동물들을 모두 데려오는 동물모임 함수를 promise로 작성.☼
function gatheringAnimal() {
  return getChick().then((chick) => {
    return getPuppy().then((puppy) => `${chick} + ${puppy}`)
  })
}
gatheringAnimal().then(console.log)

//동물들을 모두 데려오는 동물모임 함수를 async await으로 작성.✨
async function gatheringAnimalAsync() {
  const chick = await getChick()
  const puppy = await getPuppy()
  return `get:${chick} + get:${puppy}`
}
gatheringAnimalAsync().then(console.log)

//async, await 병렬처리 ☼
//async await으로 작성한 직렬처리 된 동물모임 함수를 병렬처리.
//병아리를 데려오는 일에 강아지가 필요없고, 강아지를 데려오는 일에 병아리가 필요없으므로
//병렬처리 해줌.
async function gatheringAnimalAsyncParallel() {
  const chickPromise = getChick()
  const puppyPromise = getPuppy()
  const chick = await chickPromise
  const puppy = await puppyPromise
  return `getParallel:${chick} + getParallel:${puppy}`
}
gatheringAnimalAsyncParallel().then(console.log)

//위와 같이 줄줄 쓰면 더러운 코드가 된다.
//Promise에서 제공하는 API를 쓰면 깨끗한 코드를 만들 수 있다.

// 3. useful Promise APIs
//Promise API all을 사용하면 배열에 모두 받아올 수 있다.
function gatheringAllAnimal() {
  return Promise.all([getChick(), getPuppy()]).then((animal) => animal.join(' + '))
}
gatheringAllAnimal().then(console.log)

// Promise API race를 사용하면 배열에서 처음 받아온 것을 반환할 수 있다.
// 어떤 것이든 상관 없이 처음 가져온 것을 받아오고 싶을 때 사용.
function getOnlyOne() {
  return Promise.race([getChick(), getPuppy()])
}
getOnlyOne().then(console.log)
