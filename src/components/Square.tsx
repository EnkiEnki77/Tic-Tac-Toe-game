import React from 'react'
import X from '../assets/icon-x.svg'

type Props = {
  mark:string,
  id:number
}

const Square = (props: Props) => {
  return (
    <div className="w-[95px] h-24 pb-2 flex justify-center items-center bg-darkBlue2 rounded-[10px] shadow-[inset_0px_-8px_0px_#18212a]">
      <img className="h-10 w-10 z-30 " src={X} alt="" />
    </div>
  )
}

export default Square