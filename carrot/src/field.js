'use strcit'

import * as sound from './sound.js'

const carrotSound = new Audio('./sound/carrot_pull.mp3')
const CAAROT_SIZE = 80

export default class Field {
  constructor(carrotCount, bugCount) {
    this.carrotCount = carrotCount
    this.bugCount = bugCount
    this.field = document.querySelector('.game__field')
    this.fieldRect = this.field.getBoundingClientRect()
    this.field.addEventListener('click', this.onClick)
    //this binding
    //this.field.addEventListener('click', this.onClick)에
    //함수를 인자로 어딘가에 전달할 때 클래스 정보는 함께 전달되지 않는다.
    //onClick은 Field class의 멤버함수이다, this.onClick을 전달하면
    //클래스 정보가 무시된 상태로 함수만 전달된다. this는 클래스가 아니기 때문.
    //어떤 클래스에 있는 함수를 누군가에게 전달해줄 때 클래스 정보를 무시하고 싶지 않으면
    //이 함수를 클래스와 바인딩을 해줘야 한다. 이것을 this 바인딩이라고 한다.

    //Bind() 3 Way
    // 1. 미리 초기 인수를 직접적으로 binding.
    // - constructor에 this.onClick = this.onClick.bind(this)
    // this.field.addEventListener('click', this.onClick)

    // 2. arrow function, event를 전달 받아 onClick에 event를 넣어서 호출.
    //    하나의 callback으로 감싼 형태의 arrow function은 this 가 유지된다.
    // - this.field.addEventListener('click', (event) => this.onClick(event))
    // - 위 코드는 아래와 동일함
    // - this.field.addEventListener('click', function(event){this.onClcik(event)})

    // 3. 전달하려는 onClick을 멤버 변수로 만들고 event를 arrow function으로 가리키게 만든다.
    // - onClick = (event) => { }
    // this.field.addEventListener('click', this.onClick)
  }

  init() {
    this.field.innerHTML = ''
    this._addItem('carrot', this.carrotCount, 'img/carrot.png')
    this._addItem('bug', this.bugCount, 'img/bug.png')
  }

  setClickListener(onItemClick) {
    this.onItemClick = onItemClick
  }

  // '_' means private function
  _addItem(className, count, imgPath) {
    const x1 = 0
    const y1 = 0
    const x2 = this.fieldRect.width - CAAROT_SIZE
    const y2 = this.fieldRect.height - CAAROT_SIZE
    for (let i = 0; i < count; i++) {
      const item = document.createElement('img')
      item.setAttribute('class', className)
      item.setAttribute('src', imgPath)
      item.style.position = 'absolute'
      const x = randomNumber(x1, x2)
      const y = randomNumber(y1, y2)
      item.style.left = `${x}px`
      item.style.top = `${y}px`
      this.field.appendChild(item)
    }
  }

  //this binding
  onClick = (event) => {
    const target = event.target
    if (target.matches('.carrot')) {
      // matches = check CSS selector
      target.remove()
      sound.playCarrot()
      this.onItemClick && this.onItemClick('carrot')
    } else if (target.matches('.bug')) {
      this.onItemClick && this.onItemClick('bug')
    }
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min
}
