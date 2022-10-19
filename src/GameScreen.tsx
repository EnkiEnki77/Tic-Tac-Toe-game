import React, { useEffect, useState } from 'react'
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
  const [boardMark, setBoardMark] = useState([{mark: "", id: 1, won: false}, {mark: "", id: 2, won: false}, {mark: "", id: 3, won: false},
  {mark: "", id: 4, won: false}, {mark: "", id: 5, won: false}, {mark: "", id: 6, won: false}, 
  {mark: "", id: 7, won: false}, {mark: "", id: 8, won: false}, {mark: "", id: 9, won: false}])  
  const [winner, setWinner] = useState({won: false, player:'', spaces: {1: 0, 2: 1, 3: 2}})

  const handleTurn = () => {
    setCurrentTurn(prev => prev === 'x' ? 'o' : 'x')
  }

  const handleToggle = () => {
    setToggle(prev => !prev)
  }

  const handleBoardMark = (event: React.MouseEvent<HTMLDivElement>, id:number, mark: string) => {
    setBoardMark(prev => prev.map((item, i) => {
      if(id- 1 === i){
        return {mark: currentTurn, id: id, won: false}
      }else{
        return item
      }
    }))
  }

  const handleClearBoardMark = () => {
    setBoardMark([{mark: "", id: 1, won: false}, {mark: "", id: 2, won: false}, {mark: "", id: 3, won: false},
    {mark: "", id: 4, won: false}, {mark: "", id: 5, won: false}, {mark: "", id: 6, won: false}, 
    {mark: "", id: 7, won: false}, {mark: "", id: 8, won: false}, {mark: "", id: 9, won: false}])

    setCurrentTurn('x')

    setToggle(false)

    setWinner({won: false, player: '', spaces: {1: 0, 2: 1, 3: 2}})
  }

  useEffect(() => {
    if(!winner.won && boardMark[0].mark === 'x' && boardMark[1].mark === 'x' && boardMark[2].mark === 'x'){
      setWinner({won: true, player: 'x', spaces: {1: 0, 2: 1, 3: 2}})
      console.log(boardMark)
    }else if(boardMark[3].mark === 'x' && boardMark[4].mark === 'x' && boardMark[5].mark === 'x'){
      setWinner({won: true, player: 'x', spaces: {1: 3, 2: 4, 3: 5}})
    }else if(boardMark[6].mark === 'x' && boardMark[7].mark === 'x' && boardMark[8].mark === 'x'){
      setWinner({won: true, player: 'x', spaces: {1: 6, 2: 7, 3: 8}})
    }else if(boardMark[0].mark === 'x' && boardMark[3].mark === 'x' && boardMark[6].mark === 'x'){
      setWinner({won: true, player: 'x', spaces: {1: 0, 2: 3, 3: 6}})
    }else if(boardMark[1].mark === 'x' && boardMark[4].mark === 'x' && boardMark[7].mark === 'x'){
      setWinner({won: true, player: 'x', spaces: {1: 1, 2: 4, 3: 7}})
    }else if(boardMark[2].mark === 'x' && boardMark[5].mark === 'x' && boardMark[8].mark === 'x'){
      setWinner({won: true, player: 'x', spaces: {1: 2, 2: 5, 3: 8}})
    }else if(boardMark[0].mark === 'x' && boardMark[4].mark === 'x' && boardMark[8].mark === 'x'){
      setWinner({won: true, player: 'x', spaces: {1: 0, 2: 4, 3: 8}})
    }else if(boardMark[2].mark === 'x' && boardMark[4].mark === 'x' && boardMark[6].mark === 'x'){
      setWinner({won: true, player: 'x', spaces: {1: 2, 2: 4, 3: 6}})
    } if(boardMark[0].mark === 'o' && boardMark[1].mark === 'o' && boardMark[2].mark === 'o'){
      setWinner({won: true, player: 'o', spaces: {1: 0, 2: 1, 3: 2}})
    }else if(boardMark[3].mark === 'o' && boardMark[4].mark === 'o' && boardMark[5].mark === 'o'){
      setWinner({won: true, player: 'o', spaces: {1: 3, 2: 4, 3: 5}})
    }else if(boardMark[6].mark === 'o' && boardMark[7].mark === 'o' && boardMark[8].mark === 'o'){
      setWinner({won: true, player: 'o', spaces: {1: 6, 2: 7, 3: 8}})
    }else if(boardMark[0].mark === 'o' && boardMark[3].mark === 'o' && boardMark[6].mark === 'o'){
      setWinner({won: true, player: 'o', spaces: {1: 0, 2: 3, 3: 6}})
    }else if(boardMark[1].mark === 'o' && boardMark[4].mark === 'o' && boardMark[7].mark === 'o'){
      setWinner({won: true, player: 'o', spaces: {1: 1, 2: 4, 3: 7}})
    }else if(boardMark[2].mark === 'o' && boardMark[5].mark === 'o' && boardMark[8].mark === 'o'){
      setWinner({won: true, player: 'o', spaces: {1: 2, 2: 5, 3: 8}})
    }else if(boardMark[0].mark === 'o' && boardMark[4].mark === 'o' && boardMark[8].mark === 'o'){
      setWinner({won: true, player: 'o', spaces: {1: 0, 2: 4, 3: 8}})
    }else if(boardMark[2].mark === 'o' && boardMark[4].mark === 'o' && boardMark[6].mark === 'o'){
      setWinner({won: true, player: 'o', spaces: {1: 2, 2: 4, 3: 6}})
    }
  }, [boardMark])

  useEffect(() => {
    if(winner.spaces[1] === 0 && winner.spaces[2] === 1 && winner.spaces[3] === 2){
      console.log('hello')
      setBoardMark(prev => prev.map((item, i) => {
        if(winner.spaces[1] === i || winner.spaces[2] === i || winner.spaces[3] === i){
          return {mark: item.mark, id: item.id, won: true}
        }else{
          return item
        }
      }))
    }else if(winner.spaces[1] === 0 && winner.spaces[2] === 1 && winner.spaces[3] === 2){
      
    }else if(winner.spaces[1] === 0 && winner.spaces[2] === 1 && winner.spaces[3] === 2){
      
    }else if(winner.spaces[1] === 0 && winner.spaces[2] === 1 && winner.spaces[3] === 2){
      
    }else if(winner.spaces[1] === 0 && winner.spaces[2] === 1 && winner.spaces[3] === 2){
      
    }else if(winner.spaces[1] === 0 && winner.spaces[2] === 1 && winner.spaces[3] === 2){
      
    }else if(winner.spaces[1] === 0 && winner.spaces[2] === 1 && winner.spaces[3] === 2){
      
    }else if(winner.spaces[1] === 0 && winner.spaces[2] === 1 && winner.spaces[3] === 2){
      
    } if(winner.spaces[1] === 0 && winner.spaces[2] === 1 && winner.spaces[3] === 2){
      
    }else if(winner.spaces[1] === 0 && winner.spaces[2] === 1 && winner.spaces[3] === 2){
      
    }else if(winner.spaces[1] === 0 && winner.spaces[2] === 1 && winner.spaces[3] === 2){
      
    }else if(winner.spaces[1] === 0 && winner.spaces[2] === 1 && winner.spaces[3] === 2){
      
    }else if(winner.spaces[1] === 0 && winner.spaces[2] === 1 && winner.spaces[3] === 2){
      
    }else if(winner.spaces[1] === 0 && winner.spaces[2] === 1 && winner.spaces[3] === 2){
      
    }else if(winner.spaces[1] === 0 && winner.spaces[2] === 1 && winner.spaces[3] === 2){
      
    }else if(winner.spaces[1] === 0 && winner.spaces[2] === 1 && winner.spaces[3] === 2){
      
    }
  }, [winner.spaces])

  console.log(boardMark, winner)

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