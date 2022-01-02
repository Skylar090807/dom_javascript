//number, string, boolean, null, undefined
let num = 2
let num2 = num
console.log(num) //2
console.log(num2) //2

num2 = 3

console.log(num) //2
console.log(num2) //3

const num3 = 7
console.log(num3)

// num3 = 4  //const 값은 바꿀 수 없다.

//object
let obj = {
  name: 'skylar', //key: value
  age: 5,
}
console.log(obj.name)

let obj2 = obj
console.log(obj2.name)

obj.name = 'james'
console.log('------')
console.log(obj.name)
console.log(obj2.name)

const obj3 = {
  name: 'skylar',
}

console.log(obj3)

obj3.name = 'alexis' // object는 const로 선언해도 data 값을 바꿀 수 있다.  const로 선언 된 것은 ref이기 때문.

console.log(obj3)
