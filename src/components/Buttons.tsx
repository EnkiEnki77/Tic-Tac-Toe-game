import React from 'react'

type Props = {
  children: string
  className: string
  handler?: () => void
}

const Buttons = (props: Props) => {
  console.log(props.handler)
  return (
    <>
      {props.handler ? <button onClick={props.handler}  className={`${props.className}  h-14  pb-2  rounded-2xl text-darkBlue1 font-bold text-base uppercase`}>{props.children}</button> : 
      <button  className={`${props.className}  h-14  pb-2  rounded-2xl text-darkBlue1 font-bold text-base uppercase`}>{props.children}</button>}
    </>
  )
}

export default Buttons