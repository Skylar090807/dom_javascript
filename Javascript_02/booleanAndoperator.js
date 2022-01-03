//false: 0, -0, ''(emty string), null , NaN, undefined  data가 없거나 비어있는 것들은 false
//true: -1 , 'hello' , array(array는 object 자체이기 때문에 true, 텅텅 비어져 있는 배열도 true), 'false'(string은 모두 true)
if (true) {
  console.log('true!')
}

if (false) {
  console.log('true!')
} else {
  console.log('false!')
}

let num9
if (num9) {
  //false 이유는 num을 정의하지 않아서 undefined이기 때문.
  console.log('true!')
} else {
  console.log('false!')
}

num9 && console.log(num9) // 위의 if문이나 && 연산자를 쓰는 것은 동일하다.

let obj10 = {
  name: 'Anna',
}
if (obj10) {
  console.log(obj10)
}

obj && console.log(obj.name)
