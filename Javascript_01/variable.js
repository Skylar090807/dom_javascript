'use strict'
//1.Use strict
//use this for Vanila Javascript.

//2.Variable, rw(read/write)
//let (added in ES6) = declaration keyword
let globalName = 'global name'
{
  let name = 'Skylar'
  console.log('hi')
  name = 'hello'
  console.log(name)
}
console.log(name)
console.log(globalName)

//var (don't ever use this!!)
//var hoisting(move declaration from bottom to up)
//var has no block scope
{
  age = 4
  var age
}
console.log(age)

//3. Constant, r(read only)
//use const whenever possible.
//only use if variable needs to change.
const daysInWeek = 7
const maxNumber = 5

//Note about Constant!!
//Immutable data types: priemitibe types, frozen obfects (i.e. object.freeze())
//Mutable data types: all objects by default are mutable in JS
//favor immutable date type always for a few reasons:
//-security
//-thread safety
//-reduce haman mistakes

//4. Variable types
//primitive, single item: number, string, boolean, null, undefine, symbol
//object, box container
//function, first-class function
const count = 17 //integer
const size = 17.1 //decimal number
console.log(`value: ${count}, type: ${typeof count}`)
console.log(`value: ${size}, type: ${typeof size}`)

//number - special number values: infinity, -infinity, NaN
const infinity = 1 / 0
const negativeInfinity = -1 / 0
const nAn = 'not a number' / 2
console.log(infinity)
console.log(negativeInfinity)
console.log(nAn)

//bigInt (fairly new, don't use it yet): now only chrome and Firefox.
const bigInt = 123456789012345678901234567890n //over(-2^53 ~ 2^53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`)
Number.MAX_SAFE_INTEGER

//string
const char = 'c'
const brendan = 'brendan'
const greeting = 'hello' + brendan
console.log(`value: ${greeting}, type: ${typeof greeting}`)
const helloBob = `hi ${brendan}!` //template literals(string)
console.log(`value: ${helloBob}. type: ${typeof helloBob}`)

//boolean
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead = 3 < 1 //false
console.log(`value: ${canRead} type: ${typeof canRead}`)

//null
let nothing = null
console.log(`value: ${nothing}, type: ${typeof nothing}`)

//undefined
let x // let x  = undefined;
console.log(`value: ${x} type: ${typeof x}`)

//symbol, create unique indetifiers for objects
const symbol1 = Symbol('id')
const symbol2 = Symbol('id')
console.log(symbol1 === symbol2) //false
const gSymbol1 = Symbol.for('id')
const gSymbol2 = Symbol.for('id')
console.log(gSymbol1 === gSymbol2) //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)

//object, real-life object, data structure
const skylar = { name: 'skylar', age: 33 }
skylar.age = 32 //변경 가능

//5. Dyanmic typing: dynamically typed language
let text = 'hello'
console.log(text.charAt(0)) //h
console.log(`value: ${text}, type: ${typeof text}`)
text = 1
console.log(`value: ${text}, type: ${typeof text}`)
text = '7' + 5
console.log(`value: ${text}, type: ${typeof text}`)
text = '8' / '2'
console.log(`value: ${text}, type: ${typeof text}`)
console.log(`value: ${text}, type: ${typeof text}`)
text = 1
console.log(`value: ${text}, type: ${typeof text}`)
text = '7' + 5
console.log(`value: ${text}, type: ${typeof text}`)
text = '8' / '2'
console.log(`value: ${text}, type: ${typeof text}`)
console.log(text.charAt(0)) //error
