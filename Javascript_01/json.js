// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true)
console.log(json)

json = JSON.stringify(['apple', 'banana'])
console.log(json)

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`)
  },
}

json = JSON.stringify(rabbit)
console.log(json) //jump는 포함되지 않음.

//JSON Control
json = JSON.stringify(rabbit, ['name', 'color'])
console.log(json)

json = JSON.stringify(rabbit, (key, value) => {
  //all callback function 전달
  console.log(`key: ${key}, value: ${value}`)
  return key === 'name' ? 'Skylar' : value
})
console.log(json)

// 2. JSON to Object
// parse(json)
console.clear()
json = JSON.stringify(rabbit)
console.log(json)
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`)
  return key === 'birthDate' ? new Date(value) : value
})

// obj.jump() //jump function x

console.log(rabbit.birthDate.getDate())
console.log(obj.birthDate) //string type
