'use strict'

import Field from './field.js'
import * as sound from './sound.js'

//JacaScript Type 보장
export const Reason = Object.freeze({
  win: 'win',
  lose: 'lose',
  cancel: 'cancel',
})

//Builder Pattern
export class GameBuilder {
  gameDuration(duration) {
    this.gameDuration = duration
    return this
  }

  carrotCount(num) {
    this.carrotCount = num
    return this
  }

  bugCount(num) {
    this.bugCount = num
    return this
  }

  build() {
    return new Game(
      this.gameDuration, //
      this.carrotCount,
      this.bugCount,
    )
  }
}

class Game {
  constructor(gameDuration, carrotCount, bugCount) {
    this.gameDuration = gameDuration
    this.carrotCount = carrotCount
    this.bugCount = bugCount

    this.gameBtn = document.querySelector('.game__button')
    this.gameTimer = document.querySelector('.game__timer')
    this.gameScore = document.querySelector('.game__score')
    this.gameBtn.addEventListener('click', () => {
      if (this.started) {
        this.stop(Reason.cancel)
      } else {
        this.start()
      }
    })

    this.gameField = new Field(carrotCount, bugCount)
    this.gameField.setClickListener(this.onItemClick)

    this.started = false
    this.score = 0
    this.timer = undefined
  }

  setGameStopListener(onGameStop) {
    this.onGameStop = onGameStop
  }

  start() {
    this.started = true
    this.initGame()
    this.showStopButton()
    this.showTimerAndScore()
    this.startGameTimer()
    sound.playBackground()
  }

  stop(reason) {
    this.started = false
    this.stopGameTimer()
    this.hideGameButton()
    sound.stopBackground()
    this.onGameStop && this.onGameStop(reason)
  }

  onItemClick = (item) => {
    if (!this.started) {
      return
    }
    if (item === 'carrot') {
      // matches = check CSS selector
      this.score++
      this.updateScoreBoard()

      if (this.score === this.carrotCount) {
        this.stop(Reason.win)
      }
    } else if (item === 'bug') {
      this.stop(Reason.lose)
    }
  }

  showStopButton() {
    const icon = this.gameBtn.querySelector('.fas')
    icon.classList.add('fa-stop')
    icon.classList.remove('fa-play')
    this.gameBtn.style.visibility = 'visible'
  }

  hideGameButton() {
    this.gameBtn.style.visibility = 'hidden'
  }

  showTimerAndScore() {
    this.gameTimer.style.visibility = 'visible'
    this.gameScore.style.visibility = 'visible'
  }

  startGameTimer() {
    let remainingTimeSec = this.gameDuration
    this.updateTimerText(remainingTimeSec)
    this.timer = setInterval(() => {
      //setInerval(), clearInterval() = Web API
      if (remainingTimeSec <= 0) {
        clearInterval(this.timer)
        this.stop(this.carrotCount === this.score ? Reason.win : Reason.lose)
        return
      }
      this.updateTimerText(--remainingTimeSec)
    }, 1000)
  }

  stopGameTimer() {
    clearInterval(this.timer)
  }

  updateTimerText(time) {
    const minutes = Math.floor(time / 60) //Math.floor = float -> integer
    const seconds = time % 60
    this.gameTimer.innerHTML = `${minutes}:${seconds}`
  }

  initGame() {
    this.score = 0
    this.gameScore.innerHTML = this.carrotCount
    this.gameField.init()
  }

  updateScoreBoard() {
    this.gameScore.innerHTML = this.carrotCount - this.score
  }
}
