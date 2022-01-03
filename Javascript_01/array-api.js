// Q1. make a string out of an array
//a. join
{
  const fruits = ['apple', 'banana', 'orange']
  const result = fruits.join() //join(' | '), join(', and')...  any separate possible
  console.log(result)
}

// Q2. make an array out of a string
// a. split
{
  const fruits = '🍎, 🥝, 🍌, 🍒'
  const result = fruits.split(',') //.split(',', limit)
  console.log(result)
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
// a. reverse
{
  const array = [1, 2, 3, 4, 5]
  const result = array.reverse()
  console.log(result)
  console.log(array)
}

// Q4. make new array without the first two elements
// a. slice
{
  const array = [1, 2, 3, 4, 5]
  const result = array.slice(2, 5)
  console.log(result)
  console.log(array)
}

//
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name
    this.age = age
    this.enrolled = enrolled
    this.score = score
  }
}

const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, false, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
]

// Q5. find a student with the score 90
// a. find
{
  const result = students.find(function (student, index) {
    return student.score === 90
  })
  console.log(result)
}
// arrow function
{
  const result = students.find((student) => student.score === 90)
  console.log(result)
}

//  Q6. make an array of enrolled students
// a. filter
{
  const result = students.filter((student) => student.enrolled)
  console.log(result)
}

// Q7. make an array containing only the students's scores result should be: [45, 80, 90, 66, 88]
// a. map
{
  const result = students.map((student) => student.score)
  console.log(result)
}

// Q8. check if there is a student with the score lower than 50
// a. some
{
  console.clear()
  const result = students.some((student) => student.score < 50) // 조건을 하나만 만족해도 true
  console.log(result)
  //b. every
  const result2 = students.every((student) => student.score < 50) // 모든 배열이 조건 만족 시 true
  console.log(result)
}

//Q9. compute students' average score
// a. reduce 연산 값을 누적하여  prev 에 전달
console.clear()
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0)
  console.log(result / students.length)
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
// a. map, join
{
  const result = students.map((student) => student.score).join()
  console.log(result)
}

// Q10-1. make a string containing scores more than 50
// result should be: '80, 90, 66, 88
// a. map, filter, join
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join()
  console.log(result)
}
//Bonus! do Q10 sorted in ascending order result shoeld be: '45, 66, 80, 88, 90'
//a. sort
{
  const result = students
    .map((student) => student.score)
    .sort() //.sort((a,b) => a - b)
    .join()
  console.log(result)
}
