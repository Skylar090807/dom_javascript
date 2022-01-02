'use strict'
// Array

// 1. Declaration
const arr1 = new Array()
const arr2 = [1, 2]

// 2. Index position
const fruits = ['🍎', '🍌']
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
fruits.push('🍈', '🍒')
console.log(fruits) //['🍎', '🍌', '🍈', '🍒']

// pop: remove an item from the end
fruits.pop()
fruits.pop()
console.log(fruits) //['🍎', '🍌']

// unshift: add an item to the benigging
fruits.unshift('🍓', '🍑')
console.log(fruits) //['🍓', '🍑', '🍎', '🍌']

// shift: remove an item from the benigging
fruits.shift()
fruits.shift()
console.log(fruits) //['🍎', '🍌']

//note!! shift, unshift are slower than pop, push

//splice: remove an item by index position
fruits.push('🍍', '🥭', '🍉')
console.log(fruits) //['🍎', '🍌', '🍍', '🥭', '🍉']
fruits.splice(1, 1) //splice(start: number, deleteCount?:number):string[]
console.log(fruits) //['🍎', '🍍', '🥭', '🍉']
fruits.splice(0, 0, '🥑', '🍇') // 지정한 자리의 데이터가 지워지고 그 자리에 입력한 데이터 삽입.
console.log(fruits) // ['🥑', '🍇', '🍎', '🍍', '🥭', '🍉']

//combine two arrays
const fruits2 = ['🥝', '🥥']
const newFruits = fruits.concat(fruits2)
console.log(newFruits) //['🥑', '🍇', '🍎', '🍍', '🥭', '🍉', '🥝', '🥥']

// 5. Serching
// indexOf: find the index
console.clear()
console.log(fruits)
console.log(fruits.indexOf('🥑')) //0
console.log(fruits.indexOf('🍎')) //2
console.log(fruits.indexOf('🍭')) //-1
//includes
console.log(fruits.includes('🍎')) //true
console.log(fruits.includes('🍭')) //false
//lastIndexOf
console.clear()
fruits.push('🍎')
console.log(fruits)
console.log(fruits.indexOf('🍎')) //2 first apple
console.log(fruits.lastIndexOf('🍎')) //6 last apple
