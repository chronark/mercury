import * as React from "react"
interface Props {
  className?: string
}

const ZoomOutIcon: React.FC<Props> = (props): JSX.Element => {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"
      />
    </svg>
  )
}

export default ZoomOutIcon
