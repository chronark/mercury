import * as React from "react"
interface Props {
  className?: string
}

const MinusSmIcon: React.FC<Props> = (props): JSX.Element => {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
    </svg>
  )
}

export default MinusSmIcon
