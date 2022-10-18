import React, { useState } from 'react'
import X from '../assets/icon-x.svg'
import XOutline from '../assets/icon-x-outline.svg'
import  O from '../assets/icon-o.svg'
import  OOutline from '../assets/icon-o-outline.svg'
import IconO from './IconO'

type Props = {
  character: {1:string, 2:string}
  handleCharacter: (char:string) => void
}

const CharacterSelector = (props: Props) => {

  return (
    <div className="w-full mb-4 rounded-2xl shadow-[inset_10_10_10_10] shadow-blue1  bg-darkBlue2 h-[205px] flex flex-col items-center justify-evenly px-6">
        <h4 className="uppercase text-grey1">pick player 1's mark</h4>
        <div className="flex w-full relative px-[60px] justify-between items-center h-[72px]  rounded-[10px] bg-darkBlue1">
          <img onClick={() => props.handleCharacter('x')} className={`h-8 w-8 z-30 ${props.character[1] === 'x' ? 'contrast-0 mix-blend-multiply' : 'grayscale'}`} src={X} alt="" />
          <img onClick={() => props.handleCharacter('o')} className={`h-8 w-8 z-30 ${props.character[1] === 'o' ? 'contrast-0 mix-blend-multiply' : 'grayscale'}`} src={O} alt="" />  
          <div className={`${props.character[1] === 'x' ? 'left-0' : 'right-0'} transition-all absolute mx-2  h-[54px] w-1/2 bg-grey1 grayscale rounded-[10px] z-20`}></div>
        </div>
        <p className="uppercase text-grey1 opacity-50 ">Remember : x goes first.</p>
    </div>
  )
}

export default CharacterSelector