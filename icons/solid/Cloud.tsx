import * as React from "react"
interface Props {
  className?: string
}

const CloudIcon: React.FC<Props> = (props): JSX.Element => {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
    </svg>
  )
}

export default CloudIcon
