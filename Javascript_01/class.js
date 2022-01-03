'use strict'
//Class               //Object
//-template           //-instance of a class
//-declare once       //-created many times
//-no data in         //-data in

//JavaScript classes
//-introduced in ES6
//-syntatical sugar over prototype-based inheritance

//1. Class declarations
class Person {
  //constructor
  constructor(name, age) {
    //fields
    this.name = name
    this.age = age
  }

  //methods
  speak() {
    console.log(`${this.name}: hello!`)
  }
}

const skylar = new Person('skylar', 33)
console.log(skylar.name)
console.log(skylar.age)
skylar.speak()

//2. Getter and Setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
  get age() {
    return this._age
  }

  set age(value) {
    // if (value < 0){
    //   throw Error('age can not be negative')
    // }
    this._age = value < 0 ? 0 : value
  }
}

const user1 = new User('Steve', 'Job', -1)
console.log(user1, age)

//3. Fields (public, private)
//Too soon!
class Experiment {
  publicField = 2
  #privateField = 0 //# = private
}
const experiment = new Experiment()
console.log(experiment.publicField)
console.log(experiment.privateField)

//4. Static properties and methods
//Too soon!
class Article {
  static publisher = 'Apple Tomato'
  constructor(articleNumber) {
    this.articleNumber = articleNumber
  }

  static printPublisher() {
    console.log(Article.publisher)
  }
}

const article1 = new Article(1)
const article2 = new Article(2)
console.log(Article.publisher)
Article.printPublisher()

//5. Inheritance
//a way for one class to extend anoter class.
class Shape {
  constructor(width, height, color) {
    this.width = width
    this.height = height
    this.color = color
  }

  draw() {
    console.log(`darwing ${this.color} color!`)
  }

  getArea() {
    return width * this.height
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  darw() {
    super.draw() //super. = 부모호출
    console.log('📐')
  }
  getArea() {
    return (this.width * this.height) / 2 //overriding
  }

  toString() {
    return `Triangle: color: &{this.color}`
  }
}

const rectangle = new Rectangle(20, 20, 'blue')
rectangle.draw()
rectangle.getArea()
const triangle = new Triangle(20, 20, 'red')
triangle.draw()
triangle.getArea()

//6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle) //true
console.log(triangle instanceof Rectangle) //flase
console.log(triangle instanceof Triangle) //true
console.log(triangle instanceof Shape) //true
console.log(triangle instanceof Object) //true //Object 선택하고 ctrl+click
