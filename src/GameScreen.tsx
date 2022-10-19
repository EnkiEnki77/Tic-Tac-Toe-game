import React, { useState } from 'react'
import Board from './components/Board'
import GameStats from './components/GameStats'
import Logo from './assets/logo.svg'
import Refresh from './components/Refresh'
import Turn from './components/Turn'
import Modal from './components/Modal'

type Props = {
  character: {1:string, 2:string}
}

const GameScreen = (props: Props) => {
  const [currentTurn, setCurrentTurn] = useState('x')
  const [toggle, setToggle] = useState(false)
  const [boardMark, setBoardMark] = useState([{mark: "", id: 1}, {mark: "", id: 2}, {mark: "", id: 3},
  {mark: "", id: 4}, {mark: "", id: 5}, {mark: "", id: 6}, 
  {mark: "", id: 7}, {mark: "", id: 8}, {mark: "", id: 9}])  

  const handleTurn = () => {
    setCurrentTurn(prev => prev === 'x' ? 'o' : 'x')
  }

  const handleToggle = () => {
    setToggle(prev => !prev)
  }

  const handleBoardMark = (event: React.MouseEvent<HTMLDivElement>, id:number, mark: string) => {
    setBoardMark(prev => prev.map((item, i) => {
      if(id- 1 === i && item.mark === ''){
        return {mark: currentTurn, id: id}
      }else{
        return item
      }
    }))
  }

  const handleClearBoardMark = () => {
    setBoardMark([{mark: "", id: 1}, {mark: "", id: 2}, {mark: "", id: 3},
    {mark: "", id: 4}, {mark: "", id: 5}, {mark: "", id: 6}, 
    {mark: "", id: 7}, {mark: "", id: 8}, {mark: "", id: 9}])

    setCurrentTurn('x')

    setToggle(false)
  }

  

  console.log(currentTurn )

  return (
    <div className="flex flex-col gap-5  pt-6 bg-darkBlue1 h-screen relative">
        <div className="flex justify-between mb-11 px-6">
            <img className="w-[72px] h-8" src={Logo} alt="" />
            <Turn turn={currentTurn}/> 
            <Refresh handleToggle={handleToggle}/>
        </div>
        <Board boardMark={boardMark} handleBoardMark={handleBoardMark} turn={currentTurn} turnHandler={handleTurn}/>
        <GameStats/>
        {toggle && <Modal handleToggle={handleToggle} handleClearBoardMark={handleClearBoardMark}/>}
    </div>
  )
}

export default GameScreen