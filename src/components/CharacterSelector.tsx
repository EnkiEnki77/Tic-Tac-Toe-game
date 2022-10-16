import React from 'react'
import X from '../assets/icon-x.svg'
import XOutline from '../assets/icon-x-outline.svg'
import  O from '../assets/icon-o.svg'
import  OOutline from '../assets/icon-o-outline.svg'
import IconO from './IconO'

type Props = {}

const CharacterSelector = (props: Props) => {
    console.log(O)
  return (
    <div className="w-full rounded-2xl shadow-[inset_10_10_10_10] shadow-blue1  bg-darkBlue2 h-[205px] flex flex-col items-center justify-evenly px-6">
        <h4 className="uppercase text-grey1">pick player 1's mark</h4>
        <div className="flex w-full relative px-[60px] justify-between items-center h-[72px]  rounded-[10px] bg-darkBlue1">
          <img className="h-8 w-8 z-30 grayscale" src={X} alt="" />
          <img className="h-8 w-8 z-30 contrast-0 mix-blend-multiply" src={O} alt="" />  
          <div className="absolute mr-2 right-0 h-[54px] w-1/2 bg-grey1 grayscale rounded-[10px] z-20"></div>
        </div>
        <p className="uppercase text-grey1 opacity-50 ">Remember : x goes first.</p>
    </div>
  )
}

export default CharacterSelector