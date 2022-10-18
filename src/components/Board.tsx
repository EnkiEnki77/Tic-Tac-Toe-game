import React from 'react'
import Square from './Square'

type Props = {}

const Board = (props: Props) => {
  const boardMark = [{mark: "", id: 1}, {mark: "", id: 2}, {mark: "", id: 3},
  {mark: "", id: 4}, {mark: "", id: 5}, {mark: "", id: 6}, 
  {mark: "", id: 7}, {mark: "", id: 8}, {mark: "", id: 9},]
  return (
    <div className="flex flex-wrap gap-5">
      {boardMark.map(item => <Square mark={item.mark} key={item.id} id={item.id}/>)}
      
    </div>
  )
}

export default Board