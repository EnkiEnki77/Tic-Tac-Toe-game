import React from 'react'
import Buttons from './components/Buttons'
import CharacterSelector from './components/CharacterSelector'
import Logo from './components/Logo'

type Props = {}

const MenuScreen = (props: Props) => {
  return (
    <div>
        <Logo/>
        <CharacterSelector/>
        <Buttons></Buttons>
        <Buttons></Buttons>
    </div>
  )
}

export default MenuScreen