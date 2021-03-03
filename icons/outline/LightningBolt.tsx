import * as React from "react"
interface Props {
  className?: string
}

const LightningBoltIcon: React.FC<Props> = (props): JSX.Element => {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )
}

export default LightningBoltIcon
