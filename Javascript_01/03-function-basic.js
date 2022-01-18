'use strict'
//Function Declaration and Function Call ⭐️

//Function Declaration 함수 선언🟣
//1. 값을 return하지 않는 함수
function doSomething() {
  console.log('Do Something')
}
//2. 값을 return하는 함수
function add(a, b) {
  const sum = a + b
  return sum
}
// 3. 함수를 인자로 전달하는 함수
function argsDelivery(add) {
  console.log(add)
}

// 4. 함수를 인자로 전달 한 뒤 기능을 하는 함수
function argsDeliveryfunction(add) {
  const result = add(2, 3)
  console.log(result)
}

// Function Call 함수 호출 🟣
doSomething() //출력: Do Something
add() //출력 : 아무것도 출력되지 않는다.
add(1, 2) //출력 : 아무것도 출력되지 않는다.
const print = new add(1, 2)
console.log(print) // add{} 3
argsDelivery(add)
//출력: ƒ add(a, b) {
// const sum = a + b
// return sum
// }
argsDeliveryfunction(add)

//함수를 변수에 할당
const addFun = add
console.log(add)
/*
출력:
ƒ add(a, b) {
  const sum = a + b
  return sum
}
*/
const view = addFun(1, 2)
console.log(view) //출력: 3
