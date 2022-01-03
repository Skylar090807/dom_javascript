//Objects
//one of the JavaScript's data types.
//a collection of related datat and/or functionality.
//Neraly all objects in JavaScript are instances of Object
//object = {key : value}

// 1. Literals and properties
const obj1 = {} //'object literal' syntax
const obj2 = new Object() //'object consructor' syntax

function print(person) {
  console.log(person.name)
  console.log(person.age)
}

const Skylar = { name: 'Skylar', age: 33 }
print(Skylar)

//with JavaScript magic (dynamically typed language)
//can add prorerties later
Skylar.hasJob = true
console.log(Skylar.hasJob)

delete Skylar.hasJob
console.log(Skylar.hasJob)

// 2.Computed prorerties
//key should be always string
console.log(Skylar.name)
console.log(Skylar['name']) //key = 'string'type
Skylar['hasJob'] = true
console.log(Skylar.hasJob)

function printValue(obj, key) {
  console.log(obj[key])
}
printValue(Skylar, 'name')

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 }
const person2 = { name: 'steve', age: 3 }
const person3 = { name: 'dave', age: 4 }
const person4 = new Person('Skylar', 33)
console.log(person4)
// function Person(person4) {
//   return {
//     name, // name: name key 값과  value 값이 같을 땐 key만 써줘도 된다.
//     age, // age: age
//   }
// }

// 4. Constructor Function
function Person(name, age) {
  //this = {}
  this.name = name
  this.age = age
}

// 5. in operator: property existence check (key in obj)
console.log('name' in Skylar) //true
console.log('age' in Skylar) //true
console.log('random' in Skylar) //false
console.log(Skylar.random) //undefined

// 6. for..in vs for..of
// for (key in obj)
console.clear() // 이전 로그 지우기
for (key in Skylar) {
  console.log(key)
}

//for (value of iterable)
const array = [1, 2, 3, 4, 5]
for (value of array) {
  console.log(value)
}

// 7. Cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'Skylar', age: '33' }
const user2 = user
console.log(user2)
user2.name = 'coder'
console.log(user)

//old way
const user3 = {}
for (key in user) {
  user3[key] = user[key]
}
console.clear()
console.log(user3)

//another way
const user4 = {}
Object.assign(user4, user)
console.log(user4)

const user5 = Object.assign({}, user)
console.log(user5)

//another example
const fruit1 = { color: 'red' }
const fruit2 = { color: 'blue', size: 'big' }
const mixed = Object.assign({}, fruit1, fruit2) // 가장 오른쪽에 있는 값을 계속 덮어 씌움.
console.log(mixed.color) // blue
console.log(mixed.size) //big
