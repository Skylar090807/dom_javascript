'use strict'

import * as sound from './sound.js'
import PopUp from './popup.js'
import { GameBuilder, Reason } from './game.js'

//GameBuilder
const game = new GameBuilder()
  .gameDuration(60) //
  .carrotCount(20)
  .bugCount(10)
  .build()

game.setGameStopListener((reason) => {
  console.log(reason)
  let message
  switch (reason) {
    case Reason.cancel:
      message = 'Replay?🤡'
      sound.playAlert()
      break
    case Reason.win:
      message = '🌈YOU WIN👍'
      sound.playWin()
      break
    case Reason.lose:
      message = '👻YOU LOST👅'
      sound.playBug()
      break
    default:
      throw new Error('not valid reason')
  }
  gameFinishBanner.showWithText(message)
})

// PopUp
const gameFinishBanner = new PopUp()
gameFinishBanner.setClickListener(() => {
  game.start()
})
