'use strict'
//Callback Hell example 💩
//user의 data를 backend server에서 받아오는 class가 있다고 가정해보자.
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((id === 'skylar' && password === '12345') || (id === 'alex' && password === '54321')) {
          resolve(id)
        } else {
          reject(new Error('not found'))
        }
      }, 2000)
    })
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'skylar') {
          resolve({ name: 'skylar', role: 'admin' })
        } else {
          reject(new Error('no access'))
        }
      }, 1000)
    })
  }
}

//<실전문제> 위 class UserStorage를 이용해서
// 1️⃣ 사용자에게 id, password를 입력 받아온다.
// 2️⃣ login을 한다
// 3️⃣ login 성공한 id를 요청해서 role을 받아온다.
// 4️⃣ role에 요청해 사용자의 id와 role을 출력한다.

//callback hell version
//아래와 같이 callback에 callback을 거듭하면 가독성도 떨어지고 디버깅도 어렵다.
const userLogin = new UserStorage()
const id = prompt('enter your 🆔')
const password = prompt('enter your Password 🕵🏻‍♀️')
// userLogin.loginUser(
//   id,
//   password,
//   (user) => {
//     userLogin.getRoles(
//       user,
//       (userWithRole) => {
//         alert(`${userWithRole.name} Login Succeeded, Your role is ${userWithRole.role}`)
//       },
//       (error) => {
//         console.log(error)
//       },
//     )
//   },
//   (error) => {
//     console.log(error)
//   },
// )

//callback hell version 💩  ->  promise chaining 으로 바꾼다.✨
userLogin
  .loginUser(id, password)
  // .then(user => UserStorage.getRoles(user))
  .then(userLogin.getRoles)
  .then((user) => alert(`${user.name} Login Succeeded, Your role is ${user.role}`))
  .catch(console.log)
