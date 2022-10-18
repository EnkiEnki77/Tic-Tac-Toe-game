import React from 'react'
import GameStat from './GameStat'

type Props = {}

const GameStats = (props: Props) => {
  
  return (
    <div className="w-full flex gap-5 ">
      <GameStat/>
      <GameStat/>
      <GameStat/>
    </div>
  )
}

export default GameStats