import React from 'react'
import X from '../assets/icon-x.svg'


type Props = {}

const Turn = (props: Props) => {
  return (
    <div className="px-[15px] mr-7 flex items-center pb-2 justify-between h-10 w-24 bg-darkBlue2 rounded-[5px] shadow-[inset_0px_-4px_0px_#18212a]">
      <img className="h-4 w-4 z-30 grayscale" src={X} alt="" />
      <p className="text-grey1 uppercase">Turn</p>
    </div>
  )
}

export default Turn