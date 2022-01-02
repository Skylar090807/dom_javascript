'use strict'

const CAAROT_SIZE = 80
const CARROT_COUNT = 20
const BUG_COUNT = 20
const GAME_DURATION_SEC = 20

const field = document.querySelector('.game__field')
const gameBtn = document.querySelector('.game__button')
const gameTimer = document.querySelector('.game__timer')
const gameScore = document.querySelector('.game__score')

const popUp = document.querySelector('.pop-up')
const popUpText = document.querySelector('.pop-up__message')
const popUpRefresh = document.querySelector('.pop-up__refresh')

// .game__field의 DOMResct를 받아온다.
// bottom: 508
// height: 226
// left: 440
// right: 1240
// top: 282
// width: 800
// x: 440
// y: 282
const fieldRect = field.getBoundingClientRect()

// This uses the HTMLAudioElement inerface.
const carrotSound = new Audio('./sound/carrot_pull.mp3')
const alertSound = new Audio('./sound/alert.wav')
const bgSound = new Audio('./sound/bg.mp3')
const bugSound = new Audio('./sound/bug_pull.mp3')
const winSound = new Audio('./sound/game_win.mp3')

let started = false
let score = 0
let timer = undefined

// field.addEventListener('click', (event) => onfieldClick(event)) 생략 가능
field.addEventListener('click', onfieldClick)

gameBtn.addEventListener('click', () => {
  if (started) {
    stopGame()
  } else {
    startGame()
  }
})

popUpRefresh.addEventListener('click', () => {
  startGame()
  hidePopUp()
})

function startGame() {
  started = true
  initGame()
  showStopButton()
  showTimerAndScore()
  startGameTimer()
  playSound(bgSound)
}

function stopGame() {
  started = false
  stopGameTimer()
  hideGameButton()
  showPopUPWithText('REPLAY?? 🤡')
  playSound(alertSound)
  stopSound(bgSound)
}

function finishGame(win) {
  started = false
  stopGameTimer()
  hideGameButton()
  if (win) {
    playSound(winSound)
  } else {
    playSound(bugSound)
  }
  stopSound(bgSound)
  showPopUPWithText(win ? '🌈YOU WON👍' : '👻YOU LOST👅')
}

function showStopButton() {
  const icon = gameBtn.querySelector('.fas')
  icon.classList.add('fa-stop')
  icon.classList.remove('fa-play')
  gameBtn.style.visibility = 'visible'
}

function hideGameButton() {
  gameBtn.style.visibility = 'hidden'
}

function showTimerAndScore() {
  gameTimer.style.visibility = 'visible'
  gameScore.style.visibility = 'visible'
}

function startGameTimer() {
  let remainingTimeSec = GAME_DURATION_SEC
  updateTimerText(remainingTimeSec)
  timer = setInterval(() => {
    //setInerval(), clearInterval() = Web API
    if (remainingTimeSec <= 0) {
      clearInterval(timer)
      finishGame(CARROT_COUNT === score)
      return
    }
    updateTimerText(--remainingTimeSec)
  }, 1000)
}

function stopGameTimer() {
  clearInterval(timer)
}

function updateTimerText(time) {
  const minutes = Math.floor(time / 60) //Math.floor = float -> integer
  const seconds = time % 60
  gameTimer.innerHTML = `${minutes}:${seconds}`
}

function showPopUPWithText(text) {
  popUpText.innerHTML = text
  popUp.classList.remove('pop-up--hide')
}

function hidePopUp() {
  popUp.classList.add('pop-up--hide')
}

function initGame() {
  score = 0
  field.innerHTML = ''
  gameScore.innerHTML = CARROT_COUNT
  //  create bugs and carrots -> add at field
  // console.log(fieldRect) //.game__field의 DOMResct를 받아온다.
  addItem('carrot', CARROT_COUNT, 'img/carrot.png')
  addItem('bug', BUG_COUNT, 'img/bug.png')
}

function onfieldClick(event) {
  // console.log(event)
  if (!started) {
    return
  }
  const target = event.target
  if (target.matches('.carrot')) {
    // matches = check CSS selector
    target.remove()
    score++
    playSound(carrotSound)
    updateScoreBoard()

    if (score === CARROT_COUNT) {
      finishGame(true)
    }
  } else if (target.matches('.bug')) {
    finishGame(false)
  }
}

function playSound(sound) {
  sound.currentTime = 0
  sound.play()
}

function stopSound(sound) {
  sound.pause()
}

function updateScoreBoard() {
  gameScore.innerHTML = CARROT_COUNT - score
}

function addItem(className, count, imgPath) {
  const x1 = 0
  const y1 = 0
  const x2 = fieldRect.width - CAAROT_SIZE
  const y2 = fieldRect.height - CAAROT_SIZE
  for (let i = 0; i < count; i++) {
    const item = document.createElement('img')
    item.setAttribute('class', className)
    item.setAttribute('src', imgPath)
    item.style.position = 'absolute'
    const x = randomNumber(x1, x2)
    const y = randomNumber(y1, y2)
    item.style.left = `${x}px`
    item.style.top = `${y}px`
    field.appendChild(item)
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min
}
