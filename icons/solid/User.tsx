import * as React from "react"
interface Props {
  className?: string
}

const UserIcon: React.FC<Props> = (props): JSX.Element => {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    </svg>
  )
}

export default UserIcon
