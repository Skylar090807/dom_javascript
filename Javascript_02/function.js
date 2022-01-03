const num5 = 1
const num6 = 2
const result = num5 + num6
console.log(result)

const num7 = 4
const num8 = 6
const result2 = num7 + num8
console.log(result2)

// function은 object의 한 종류이다. 내가 명명할 수 있고, 내가 정의한 기능을 수행한다. objectc처럼 ref를 가지고 있다.
// array도 object.

function add(num1, num2) {
  //인자는 내가 정의한 것이다.
  //add라는 function은 num1, num2 두 개의 인자를 받아 더해준다.
  return num1 + num2
}

const sum = add(3, 4)
//sum 은 add와 같은 곳을 가리키고 있다.

const doSomething = add
//doSomething 과 add는 똑같은 곳을 가리키고 있다.

const result3 = doSomething(2, 3)
console.log(result3)

// function print() {
//   //별도의 인자를 받지 않는 function, 아무런 input도 받지 않고 자체적으로 print 한다.
//   console.log('print')
// }

print(8, 33) // 어떤 data를 전달하든 몇 가지의 data를 전달하든 아무런 일도 수행하지 않는다.
//input을 전달해도 그 input을 무시한다.

//만약 data를 접근하고 싶다면 function add 처럼 인자를 지정해 준다.

function print(a, b) {
  console.log(`${a} ${b}`) //``백틱 키를 사용해서 a, b를 출력하면 함수 내부에서 접근이 가능하다.
} // console 창을 보면 위에서  input한 인자 print(8, 33)이 출력 된다.

function surprise(operator) {
  //operator인자는 아무런 값을 받아오지 않는다.
  //function surpise는 operator라는 인자를 받아온다.
  const result = operator()
  console.log(result)
}

// surprise() // console.log에 호출하게 되면
// Uncaught TypeError: operator is not a function
// at surprise (function.js:44)
// at function.js:48 이 console 에 출력된다.
//이유는 operator는 아무런 값을 전달하지 않았기 때문에 undefined이다.

//surprise()에 add라는 function를 전달한다.
surprise(add) //NaN

//add라는 변수가 function을 가리키고 있고 이 function은 숫자인 인자 두 개를 받아 더한 후 하나의 숫자를 return하는 기능을 수행한다.
//surprise라는 function에 add자체를 전달한다.
//즉, add 자체에 변수 공간이 할당 되어 add가 가리키고 있는 reference가 들어있고,
//function surprise 인자에는 add의 reference가 복사되어 전달된다.
//surprise 함수 내 result = operator를 호출 한다는 것은 operator의 reference가 add를 가리키고 있으므로 결국 add를 수행하는 것과 동일하다.
//이렇게만 출력하면 NaN이라고 나온다. 이유는 num1, num2에 아무런 데이터를 전달하지 않았기 때문이다.

function surprise2(operator) {
  const result = operator(2, 3) // surprise2에 add를 인자로 전달했으므로 operator (2,3) = add(2,3)
  console.log(result)
}

surprise2(add)
//함수를 전달한다는 것은 함수의 reference를 전달하는 것
