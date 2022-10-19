import React from 'react'
import Buttons from './Buttons'

type Props = {
  handleToggle: () => void
  handleClearBoardMark: () => void
}

const Modal = (props: Props) => {
  return (
    <div  className="w-full h-[228px] absolute bg-darkBlue2 flex flex-col justify-center items-center gap-4 z-40">
        <h2 className="uppercase text-grey1 text-[24px]">restart game?</h2>
        <div className="flex gap-4">
          <Buttons handler={props.handleToggle} className="bg-grey1 text-base text-darkBlue1 w-[139px] shadow-[inset_0_-4px_0_#6B8997] hover:bg-grey2">no, cancel</Buttons>
          <Buttons handler={props.handleClearBoardMark} className="bg-yellow1 text-base text-darkBlue1 w-[151px] shadow-[inset_0_-4px_0_#cc8b13] hover:bg-yellow2">yes, restart</Buttons>
        </div>
    </div>
  )
}

export default Modal