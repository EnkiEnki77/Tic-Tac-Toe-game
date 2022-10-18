import React, { useState } from 'react'
import Square from './Square'

type Props = {
  turn: string
  turnHandler: () => void
}

const Board = (props: Props) => {
  const [boardMark, setBoardMark] = useState([{mark: "", id: 1}, {mark: "", id: 2}, {mark: "", id: 3},
  {mark: "", id: 4}, {mark: "", id: 5}, {mark: "", id: 6}, 
  {mark: "", id: 7}, {mark: "", id: 8}, {mark: "", id: 9}])  

  const handleBoardMark = (event: React.MouseEvent<HTMLDivElement>, id:number, mark: string) => {
    setBoardMark(prev => prev.map((item, i) => {
      if(id- 1 === i){
        return {mark: props.turn, id: id}
      }else{
        return item
      }
    }))
  }

  console.log(boardMark)

  return (
    <div className="flex flex-wrap gap-5">
      {boardMark.map(item => <Square turn = {props.turn} turnHandler = {props.turnHandler} markHandler={handleBoardMark} mark={item.mark} key={item.id} id={item.id}/>)}
      
    </div>
  )
}

export default Board