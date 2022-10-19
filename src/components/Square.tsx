import React from 'react'
import X from '../assets/icon-x.svg'
import O from '../assets/icon-o.svg'
import XOutline from '../assets/icon-x-outline.svg'
import OOutline from '../assets/icon-o-outline.svg'
import SVG from './SVG'

type Props = {
  mark:string,
  won: boolean,
  id:number,
  turn:string, 
  turnHandler: () => void,
  markHandler: (event: React.MouseEvent<HTMLDivElement>, id: number, mark:string) => void
}

const Square = (props: Props) => {
  return (
    <>
      { props.mark === '' ?
      <div onClick={(e) => {props.turnHandler(); props.markHandler(e, props.id, props.mark);}} className="w-[95px] h-24 pb-2 flex justify-center items-center bg-darkBlue2 rounded-[10px] shadow-[inset_0px_-8px_0px_#18212a]"></div>
      :
      props.won ? 
      <div className={`w-[95px] h-24 pb-2 overflow-hidden relative ${props.mark === 'x' ? 'bg-blue1' : 'bg-yellow1'} flex justify-center items-center  rounded-[10px] shadow-[inset_0px_-8px_0px_#18212a]`}>
        {props.mark === 'x' ? <SVG shape='xoutline' height="40" width="40" vwidth='62' vheight='62'/> : <SVG shape='ooutline' height="40" width="40" vwidth='62' vheight='62'/> }
      </div>
      :
      <div className="w-[95px] h-24 pb-2 flex justify-center items-center bg-darkBlue2 rounded-[10px] shadow-[inset_0px_-8px_0px_#18212a]">
        {props.mark === 'x' ? <SVG shape='x' height="40" width="40" vwidth='62' vheight='62'/> : <SVG shape='o' height="40" width="40" vwidth='62' vheight='62'/> }
      </div>
      }
    </>
  )
}

export default Square