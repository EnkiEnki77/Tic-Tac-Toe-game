import React from 'react'
import X from '../assets/icon-x.svg'
import O from '../assets/icon-o.svg'

type Props = {
  mark:string,
  id:number,
  turn:string, 
  turnHandler: () => void,
  markHandler: (event: React.MouseEvent<HTMLDivElement>, id: number, mark:string) => void
}

const Square = (props: Props) => {
  return (
    <div onClick={(e) => {props.turnHandler(); props.markHandler(e, props.id, props.mark);}} className="w-[95px] h-24 pb-2 flex justify-center items-center bg-darkBlue2 rounded-[10px] shadow-[inset_0px_-8px_0px_#18212a]">
      {props.mark === 'x' ? <img className="h-10 w-10 z-30 " src={X} alt="" /> : props.mark === 'o' ? <img className="h-10 w-10 z-30 " src={O} alt="" /> : null}
    </div>
  )
}

export default Square