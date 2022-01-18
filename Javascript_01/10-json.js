'use strict'
// JSON(JavaScript Object Notation)
// parse, stringfy Overloading

//interface JSON {
/**
 * Converts a JavaScript Object Notation (JSON) string into an object.
 * @param text A valid JSON string.
 * @param reviver A function that transforms the results. This function is called for each member of the object.
 * If a member contains nested objects, the nested objects are transformed before the parent object is.
 */
//     parse(text: string, reviver?: (this: any, key: string, value: any) => any): any;
/**
 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
 * @param value A JavaScript value, usually an object or array, to be converted.
 * @param replacer A function that transforms the results.
 * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
 */
//     stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
/**
 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
 * @param value A JavaScript value, usually an object or array, to be converted.
 * @param replacer An array of strings and numbers that acts as an approved list for selecting the object properties that will be stringified.
 * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
 */
//     stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string;
//}

/*
1. JSON Serialization (Object to JSON)
stringfy(obj)
(method) JSON.stringify(value: any, replacer?: ((this: any, key: string, value: any) => any) | undefined, space?: string | number | undefined): string (+1 overload)
*/

let json = JSON.stringify(true)
console.log(json) //true

json = JSON.stringify(['apple', 'banana'])
console.log(json) //["apple", "banana"] single Quotation -> double Quotation으로 변함.

//rabbit이란 object를 JSON으로 변환하기.
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
console.log(json)
//rabbit이란 object안에 jump 함수는 object의 data가 아니기 때문에 JSON 변환 출력에 포함되지 않는다.
//symbol: Symbol("id")같은 JavaScript에만 포함된 API들도 JSON 변환에 포함되지 않는다.

//JSON변환을 좀 더 통제하고 싶다면 callback함수를 이용하면 된다.
// stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
// stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string;

json = JSON.stringify(rabbit, ['name', 'color']) //property이름을 지정해주면 property 해당하는 data만 변환.
console.log(json)

json = JSON.stringify(rabbit, (key, value) => {
  //all callback function 전달
  console.log(`key: ${key}, value: ${value}`)
  return key === 'name' ? 'Skylar' : value
})
console.log(json)

/*
2. JSON Deserialization (JSON to Object)
parse(json)
(method) JSON.parse(text: string, reviver?: ((this: any, key: string, value: any) => any) | undefined): any
*/
console.clear()
json = JSON.stringify(rabbit)
console.log(json)
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`)
  return key === 'birthDate' ? new Date(value) : value
})

// obj.jump() //jump function x

console.log(rabbit.birthDate.getDate())
console.log(obj.birthDate.getDate()) //string type
