import React from "react"
import Link from "next/link"

export interface PrimaryProps {
  href?: string
  onClick?: () => void
  label: string | React.ReactNode
  highlighted?: boolean
}

export const Primary: React.FC<PrimaryProps> = ({ href, onClick, label, highlighted }) => {
  if ((href && onClick) || (!href && !onClick)) {
    throw new Error("Use either onClick or href, not both at the same time")
  }

  const className = `inline-flex hover:shadow-glow justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center no-underline bg-transparent border border-blue-500 rounded cursor-pointer hover:border-0 bg-gradient-to-tr  focus-within:bg-blue-800 focus-within:border-blue-800 focus-within:text-white sm:text-base md:text-lg  ${
    highlighted
      ? " from-blue-700 to-lightBlue-500 text-white "
      : "hover:from-blue-700 hover:to-lightBlue-500 hover:text-white text-blue-800 "
  }`

  if (typeof href === "string") {
    return (
      <Link href={href}>
        <a className={className}>{label}</a>
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  )
}
