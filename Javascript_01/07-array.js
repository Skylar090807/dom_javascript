'use strict'
// Array

// 1. Declaration
const arr1 = new Array()
const arr2 = [1, 2]

// 2. Index position
const fruits = ['๐', '๐']
console.log(fruits)
console.log(fruits.length)
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[fruits.length - 1])

// 3.Looping over an array
// Quiz! print all fuits
console.clear()
//a. for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}
//b. for of
for (let fruit of fruits) {
  console.log(fruit)
}
//c. forEach
// get callback function
fruits.forEach(function (fruit) {
  console.log(fruit)
})
fruits.forEach((fruit) => console.log(fruit)) //arrow function

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('๐', '๐')
console.log(fruits) //['๐', '๐', '๐', '๐']

// pop: remove an item from the end
fruits.pop()
fruits.pop()
console.log(fruits) //['๐', '๐']

// unshift: add an item to the benigging
fruits.unshift('๐', '๐')
console.log(fruits) //['๐', '๐', '๐', '๐']

// shift: remove an item from the benigging
fruits.shift()
fruits.shift()
console.log(fruits) //['๐', '๐']

//note!! shift, unshift are slower than pop, push

//splice: remove an item by index position
fruits.push('๐', '๐ฅญ', '๐')
console.log(fruits) //['๐', '๐', '๐', '๐ฅญ', '๐']
fruits.splice(1, 1) //splice(start: number, deleteCount?:number):string[]
console.log(fruits) //['๐', '๐', '๐ฅญ', '๐']
fruits.splice(0, 0, '๐ฅ', '๐') // ์ง์ ํ ์๋ฆฌ์ ๋ฐ์ดํฐ๊ฐ ์ง์์ง๊ณ  ๊ทธ ์๋ฆฌ์ ์๋ ฅํ ๋ฐ์ดํฐ ์ฝ์.
console.log(fruits) // ['๐ฅ', '๐', '๐', '๐', '๐ฅญ', '๐']

//combine two arrays
const fruits2 = ['๐ฅ', '๐ฅฅ']
const newFruits = fruits.concat(fruits2)
console.log(newFruits) //['๐ฅ', '๐', '๐', '๐', '๐ฅญ', '๐', '๐ฅ', '๐ฅฅ']

// 5. Serching
// indexOf: find the index
console.clear()
console.log(fruits)
console.log(fruits.indexOf('๐ฅ')) //0
console.log(fruits.indexOf('๐')) //2
console.log(fruits.indexOf('๐ญ')) //-1
//includes
console.log(fruits.includes('๐')) //true
console.log(fruits.includes('๐ญ')) //false
//lastIndexOf
console.clear()
fruits.push('๐')
console.log(fruits)
console.log(fruits.indexOf('๐')) //2 first apple
console.log(fruits.lastIndexOf('๐')) //6 last apple
