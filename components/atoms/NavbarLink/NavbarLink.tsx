import React from "react"
import { useRouter } from "next/router"
import Link from "next/link"
export interface NavbarLinkProps {
  href: string
  label: string
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({ href, label }) => {
  const router = useRouter()

  const style = `px-3 py-2 text-sm font-medium ${
    router.pathname === href ? "text-gray-800" : "text-gray-600"
  } rounded-md hover:text-gray-800`

  return (
    <Link href={href}>
      <a className={style}>{label}</a>
    </Link>
  )
}
