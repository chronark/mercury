import * as React from "react"
interface Props {
  className?: string
}

const MenuAlt4Icon: React.FC<Props> = (props): JSX.Element => {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
    </svg>
  )
}

export default MenuAlt4Icon
