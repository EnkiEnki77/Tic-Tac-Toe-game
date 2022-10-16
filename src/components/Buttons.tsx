import React from 'react'

type Props = {
  children: string
}

const Buttons = (props: Props) => {
  return (
    <button className="shadow-[inset_0_-8px_0px_#cc8b13] h-14 w-full pb-2 bg-yellow1 rounded-2xl text-darkBlue1 font-bold text-base uppercase  ">{props.children}</button>
  )
}

export default Buttons