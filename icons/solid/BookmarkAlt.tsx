import * as React from "react"
interface Props {
  className?: string
}

const BookmarkAltIcon: React.FC<Props> = (props): JSX.Element => {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default BookmarkAltIcon
