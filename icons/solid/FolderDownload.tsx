import * as React from "react"
interface Props {
  className?: string
}

const FolderDownloadIcon: React.FC<Props> = (props): JSX.Element => {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
      <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v4m0 0l-2-2m2 2l2-2" />
    </svg>
  )
}

export default FolderDownloadIcon
