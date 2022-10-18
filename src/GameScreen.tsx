import React from 'react'
import Board from './components/Board'
import GameStats from './components/GameStats'
import Logo from './assets/logo.svg'
import Refresh from './components/Refresh'
import Turn from './components/Turn'

type Props = {}

const GameScreen = (props: Props) => {
  return (
    <div className="flex flex-col gap-5 px-6 pt-6 bg-darkBlue1 h-screen">
        <div className="flex justify-between mb-11">
            <img className="w-[72px] h-8" src={Logo} alt="" />
            <Turn/> 
            <Refresh/>
        </div>
        <Board/>
        <GameStats/>
    </div>
  )
}

export default GameScreen