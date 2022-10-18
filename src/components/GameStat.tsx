import React from 'react'

type Props = {}

const GameStat = (props: Props) => {
  return (
    <div className="w-24 h-16 rounded-[10px] bg-blue1 flex flex-col items-center justify-center">
      <p>you</p>
      <h3 className="text-xl">13</h3>
    </div>
  )
}

export default GameStat