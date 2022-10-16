import React from 'react'
import Buttons from './components/Buttons'
import CharacterSelector from './components/CharacterSelector'
import Logo from './assets/logo.svg'


type Props = {}

const MenuScreen = (props: Props) => {
  return (
    <div className="bg-darkBlue1 h-full gap-4 px-6 flex flex-col justify-center items-center">
        <img className="mb-4" src={Logo} alt="" />
        <CharacterSelector/>
        <Buttons>new game (vs cpu)</Buttons>
        <Buttons>new game (vs player)</Buttons>
    </div>
  )
}

export default MenuScreen