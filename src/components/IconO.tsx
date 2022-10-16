import * as React from "react"

type Props = {
    fill: string
    stroke: string
}

const IconO = (props: Props) => (
  <svg width={32} height={32} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" fill={props.fill} stroke={props.stroke}>
    <path
      d="M0 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
      fill="#F2B137"
    />
  </svg>
)

export default IconO
