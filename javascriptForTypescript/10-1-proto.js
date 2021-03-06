{
  // Prototype

  //[[Prototype]]: Object ๐ก
  const x = {}
  const y = {}
  console.log(x)
  console.log(y)

  /*
    ์๋ฌด ๊ฒ๋ ๋ค์ด์์ง ์์ object๋ฅผ ์์ฑํ๋ค.
    console์ ์ถ๋ ฅํ๋ฉด ๋น object์ proto๊ฐ ๋ค์ด์๋ ๊ฑธ ๋ณผ ์ ์๋ค.
    
    [[Prototype]]: Object
    prototype์ object ์ด๋ค.
    JavaScript์์ ๋ชจ๋  object๋ Object๋ผ๋ proto๋ฅผ ์์ํ๋ค.

    prototype์ ์๋์ ๊ฐ์ ํจ์๋ค์ ์์ํ๊ณ  ์๋ค.
    constructor: ฦ Object()
    hasOwnProperty: ฦ hasOwnProperty()
    isPrototypeOf: ฦ isPrototypeOf()
    propertyIsEnumerable: ฦ propertyIsEnumerable()
    toLocaleString: ฦ toLocaleString()
    toString: ฦ toString()
    valueOf: ฦ valueOf()
    __defineGetter__: ฦ __defineGetter__()
    __defineSetter__: ฦ __defineSetter__()
    __lookupGetter__: ฦ __lookupGetter__()
    __lookupSetter__: ฦ __lookupSetter__()
    __proto__: (...)
    get __proto__: ฦ __proto__()
    set __proto__: ฦ __proto__() 
  */

  //๋น object๋ proto ์์์ผ๋ก ๊ธฐ๋ณธ ์ ๊ณต๋๋ ํจ์๋ค์ ์ฌ์ฉํ  ์ ์๋ค.
  console.log(x.toString())

  //๊ฐ๊ฐ ๋ค๋ฅธ object x์ y์ proto๋ ์ ๊ฐ์๊น?
  console.log(x.__proto__ === y.__proto__) //true
  //๊ฐ์ proto object๋ฅผ ์์ ๋ฐ์๊ธฐ ๋๋ฌธ.

  //[[Prototype]]: Array(0) ๐ก
  const array = []
  console.log(array)
  /* 
  JavaScript ๋ชจ๋  array๋ Array๋ผ๋ proto๋ฅผ ์์ํ๋ค.
  [[Prototype]]: Array(0)๋ ์๋์ ๊ฐ์ ํจ์๋ค์ ์์ํ๊ณ  ์๋ค.
  
  [[Prototype]]: Array(0)
    at: ฦ at()
    concat: ฦ concat()
    constructor: ฦ Array()
    copyWithin: ฦ copyWithin()
    entries: ฦ entries()
    every: ฦ every()
    fill: ฦ fill()
    filter: ฦ filter()
    find: ฦ find()
    findIndex: ฦ findIndex()
    findLast: ฦ findLast()
    findLastIndex: ฦ findLastIndex()
    flat: ฦ flat()
    flatMap: ฦ flatMap()
    forEach: ฦ forEach()
    includes: ฦ includes()
    indexOf: ฦ indexOf()
    join: ฦ join()
    keys: ฦ keys()
    lastIndexOf: ฦ lastIndexOf()
    length: 0
    map: ฦ map()
    pop: ฦ pop()
    push: ฦ push()
    reduce: ฦ reduce()
    reduceRight: ฦ reduceRight()
    reverse: ฦ reverse()
    shift: ฦ shift()
    slice: ฦ slice()
    some: ฦ some()
    sort: ฦ sort()
    splice: ฦ splice()
    toLocaleString: ฦ toLocaleString()
    toString: ฦ toString()
    unshift: ฦ unshift()
    values: ฦ values()
    Symbol(Symbol.iterator): ฦ values()
    Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, โฆ}
    [[Prototype]]: Object ๐ก

  ๋ณ์ array๋ Array๋ผ๋ proto๋ฅผ ์์๋ฐ๊ณ  Array proto๋ Object๋ผ๋ proto๋ฅผ ์์๋ฐ๋๋ค.
  Array proto์์ ์๋ ํจ์์ Object proto์์ ์๋ ํจ์๋ฅผ ๋ชจ๋ ์ฌ์ฉํ  ์ ์๋ค.
  */

  function CoffeeMachine(beans) {
    this.beans = beans
    //constructor function ์์ ๋ง๋ค๊ฒ ๋๋ฉด ๋ง๋ค์ด์ง๋ object๋ง๋ค ํฌํจ๋๋ค.
    //Instance(object) member level
    // this.makeCoffee = (shots) => {
    //   console.log('making...โ๏ธ')
    // }
  }

  //Prototype member level
  // CoffeeMachine.prototype.makeCoffee = function () {}
  CoffeeMachine.prototype.makeCoffee = (shots) => {
    console.log('making...โ๏ธ') //console ์ฐฝ์ ํ์ธํ๋ฉด CoffeeMachine์์ makeCoffee๋ ๋ ์ด์ ์๊ณ 
    //Prototype ์์ makecoffee๊ฐ ๋ค์ด์๋ ๊ฒ์ ํ์ธ ํ  ์ ์๋ค.
  }

  const machine1 = new CoffeeMachine(10)
  const machine2 = new CoffeeMachine(20)
  console.log(machine1)
  console.log(machine2)

  /*
  machine1, 2๋ CoffeeMachine์ด๋ผ๋ proto๋ฅผ ๊ฐ์ง๊ณ  ์์ํ๊ณ , CoffeeMachine์ Object๋ผ๋ proto๋ฅผ ๊ฐ์ง๊ณ  ์์ํ๊ณ  ์๋ค.
  Object > CoffeeMachine > machine
   */

  function LatteMachine(milk) {
    this.milk = milk
  }

  LatteMachine.prototype = Object.create(CoffeeMachine.prototype)

  const latteMachine = new LatteMachine(123) //์ ๋ฌ ๋ฐ๋ milk๊ฐ string์ธ์ง number์ธ์ง ์ ์ ์์ด๋ ๋์ํ๋ค.
  console.log(latteMachine)

  latteMachine.makeCoffee()
  //prototype์ javascript์์ ์์์ ์ฌ์ฉํ๊ธฐ ์ํด ์ด๋ค.(์ฝ๋ ์ฌ์ฌ์ฉ)
}
