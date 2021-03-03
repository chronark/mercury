import * as React from "react"
interface Props {
  className?: string
}

const MinusIcon: React.FC<Props> = (props): JSX.Element => {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
    </svg>
  )
}

export default MinusIcon
