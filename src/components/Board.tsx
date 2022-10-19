import React, { useState } from 'react'
import Square from './Square'

type Props = {
  turn: string
  turnHandler: () => void
  boardMark: {mark:string, id:number, won: boolean}[]
  handleBoardMark: (event: React.MouseEvent<HTMLDivElement>, id:number, mark: string) => void
}

const Board = (props: Props) => {
  return (
    <div className="flex flex-wrap gap-5 px-6">
      {props.boardMark.map(item => <Square won={item.won} turn = {props.turn} turnHandler = {props.turnHandler} markHandler={props.handleBoardMark} mark={item.mark} key={item.id} id={item.id}/>)}
      
    </div>
  )
}

export default Board