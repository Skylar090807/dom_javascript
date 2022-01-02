class Counter {
  //class is blueprint for many kind object
  constructor() {
    //constructor도 function
    this.counter = 0 //class를 이용해서 object를 만드는 순간 0으로 초기화된다.
  }

  increase() {
    // 증가 함수, class 내에서 함수 선언 시 function 작성하지 않아도 된다.
    this.counter++
    console.log(this.counter)
  }
}

const coolCounter = new Counter() // new 라는 키워드를 이용해서 class를 만들게 되면 constructor가 실행 된다.
//this.counter = 0 으로 초기화. 때문에 0으로 데이터가 들어가고 0인 상태에서 계속 increase 호출.

//coolcounter라는 변수는 내가 만든 object를 가리키고 있고, 그 object에 increase라는 함수 호출.
//호출할 때마다 1씩 증가.
coolCounter.increase()
coolCounter.increase()
coolCounter.increase()

//callback function 전달

class Counter2 {
  constructor() {
    this.counter2 = 0
  }

  increase(runIf5Times) {
    //callback 인자
    this.counter2++
    console.log(this.counter2)
    if (this.counter2 % 5 === 0) {
      runIf5Times(this.counter2) //callback 호출
      //callback function을 전달함으로써 내가 원하는 기능을 수행할 수 있다.
      // 어떤 동작을 하는지 자체적으로 결정하지 않았기 때문에 사용할 때 원하는 기능을 function에 정의하여 수행할 수 있다.
    }
  }
}

const coolCounter2 = new Counter2()

function printSomething(num) {
  console.log(`${num} = 5 Times`)
}

function alertNum(num) {
  alert(`Wow! ${num} is 5 Times!`)
}

coolCounter2.increase(printSomething)
coolCounter2.increase(printSomething)
coolCounter2.increase(printSomething)
coolCounter2.increase(printSomething)
coolCounter2.increase(printSomething)
coolCounter2.increase(printSomething)

coolCounter2.increase(alertNum)
coolCounter2.increase(alertNum)
coolCounter2.increase(alertNum)
coolCounter2.increase(alertNum) //alert이 뜬다.
coolCounter2.increase(alertNum)

//increase에 callback을 할 때 문제점?
//function increase를 호출할 때마다 전달하면 불편하다.

//이럴 때 constructor에서 callback function을 받는다.
class Counter3 {
  constructor(runEveryFiveTimes) {
    this.counter3 = 0
    this.callback = runEveryFiveTimes //costructor function에 인자로 받아온 callback을 이 class 자체에서 기억해야하기 때문에
    //callback 이라는 변수에 runEveryFiveTimes를 할당 한다.

    //이제 Counter3 라는 class 안에는 두 가지 data type이 있다.
    //counter3를 0으로 초기화해주는 것과 callback.
    //현재 callback runEveryFiveTimes는 undefined 상태.
  }

  increase() {
    this.counter3++
    console.log(this.counter3)
    if (this.counter3 % 5 === 0) {
      this.callback(this.counter3) //increase에 callback 전달
    }
  }
}

function printSomething2(num) {
  console.log(`Number ${num} is 5 Times! `)
}

function alertNum2(num) {
  alert(`Number ${num} is 5 Times! `)
}

const coolCounter3 = new Counter3(printSomething2)
//현재 callback이 undefined상태이므로 기능 정의한 function에 callback을 받아서 호출한다.
//만약 const coolCounter3  = new Counter3() 처럼 callback인자를 직접 호출하면,
//TypeError: this.callback is not a function이 console 창에 뜬다.

coolCounter3.increase()
coolCounter3.increase()
coolCounter3.increase()
coolCounter3.increase()
coolCounter3.increase()
coolCounter3.increase()

// callback undefined type error처리

class Counter4 {
  constructor(runEveryFiveTimes) {
    this.counter4 = 0
    this.callback = runEveryFiveTimes
  }

  increase() {
    this.counter4++
    console.log(this.counter3)
    if (this.counter4 % 5 === 0) {
      this.callback && this.callback(this.counter4) // callback이 true이면(undefined가 아니라 defined된 상태) counter4를 수행.
    }
  }
}

const coolCounter4 = new Counter4()

//class 내에 기능을 전부 정의하게 되면 재사용을 할 수 없게 된다.
//callback을 이용하면 원하는 기능을 원할 때마다 새롭게 정의해 재사용을 할 수 있다.

const PrintCounter = new Counter4(printSomething2)
const alertCounter = new Counter4(alertNum2)
