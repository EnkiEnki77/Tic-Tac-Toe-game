import React from 'react'
import Buttons from './components/Buttons'
import CharacterSelector from './components/CharacterSelector'
import Logo from './assets/logo.svg'


type Props = {}

const MenuScreen = (props: Props) => {
  return (
    <div className="bg-darkBlue1 h-full px-6 flex flex-col justify-center items-center">
        <img src={Logo} alt="" />
        <CharacterSelector/>
        <Buttons></Buttons>
        <Buttons></Buttons>
    </div>
  )
}

export default MenuScreen