import React from 'react'
import Board from './components/Board'
import GameStats from './components/GameStats'
import Logo from './assets/logo.svg'
import Refresh from './components/Refresh'
import Turn from './components/Turn'

type Props = {}

const GameScreen = (props: Props) => {
  return (
    <div>
        <div>
            <img src={Logo} alt="" />
            <Turn/>
            <Refresh/>
        </div>
        <Board/>
        <GameStats/>
    </div>
  )
}

export default GameScreen