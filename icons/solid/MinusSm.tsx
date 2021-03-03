import * as React from "react"
interface Props {
  className?: string
}

const MinusSmIcon: React.FC<Props> = (props): JSX.Element => {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
  )
}

export default MinusSmIcon
