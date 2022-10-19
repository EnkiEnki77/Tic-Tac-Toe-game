import React, { useState } from 'react'
import Buttons from './components/Buttons'
import CharacterSelector from './components/CharacterSelector'
import Logo from './assets/logo.svg'


type Props = {
  character: {1:string, 2:string}
  handleCharacter: (char:string) => void
}

const MenuScreen = (props: Props) => {
  

  return (
    <div className="bg-darkBlue1 h-full gap-4 px-6 flex flex-col justify-center items-center">
        <img className="mb-4" src={Logo} alt="" />
        <CharacterSelector character={props.character} handleCharacter={props.handleCharacter}/>
        <a href="/game" className="w-full"><Buttons className="w-full shadow-[inset_0_-8px_0_#cc8b13] bg-yellow1 hover:bg-yellow2">new game (vs cpu)</Buttons></a>
        <a href="/game" className="w-full"><Buttons className='w-full shadow-[inset_0_-8px_0_#118C87] bg-blue1 hover:bg-blue2'>new game (vs player)</Buttons></a>
    </div>
  )
}

export default MenuScreen