import React from 'react'
import refresh from '../assets/icon-restart.svg'

type Props = {}

const Refresh = (props: Props) => {
  return (
    <div className="w-10 h-10 bg-grey1 rounded-[5px] flex justify-center items-center shadow-[inset_0px_-4px_0px_#6B8997]">
      <img className="w-[15px] h-[15px  ]" src={refresh} alt="" />
    </div>
  )
}

export default Refresh