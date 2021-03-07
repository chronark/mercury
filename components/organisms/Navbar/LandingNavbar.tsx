import React, { useState } from "react"
import Link from "next/link"
import { Logo } from "../../atoms/Logo/Logo"
import Menu from "../../../icons/outline/Menu"
import X from "../../../icons/outline/X"
import { User } from "../../../pkg/auth"
export interface NavbarProps {
  user?: User
  links?: { label: string; href: string }[]
}

export const Navbar: React.FC<NavbarProps> = ({
  user,
  links = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
  ],
}) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="w-screen px-8 bg-white">
      <div className="relative flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white bg-gradient-to-tr hover:from-blue-700 hover:to-lightBlue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="block w-6 h-6" />
            <X className="hidden w-6 h-6" />
          </button>
        </div>

        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>

        {/* Desktop */}
        <div className="items-center justify-center hidden w-full h-full py-5 -ml-0 space-x-12 text-base md:flex md:-ml-5 md:py-0 md:absolute">
          {links.map((link) => {
            return (
              <Link href={link.href} key={link.label}>
                <a className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900">
                  {link.label}
                </a>
              </Link>
            )
          })}
        </div>

        <div className="relative z-10 items-center hidden space-x-3 md:inline-flex md:ml-5 lg:justify-end">
          {user ? (
            <Link href="/api/auth/signout">
              <a className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap ">
                Sign out
              </a>
            </Link>
          ) : (
            <>
              <Link href="/auth/signin">
                <a className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap ">
                  Sign in
                </a>
              </Link>

              <span className="inline-flex rounded-md shadow-sm">
                <Link href="/auth/signin">
                  <a className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap rounded shadow-sm bg-gradient-to-tr from-blue-700 to-lightBlue-500 shadow-blue-400 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                    Start free trial
                  </a>
                </Link>
              </span>
            </>
          )}
        </div>
      </div>
      {/* Mobile */}
      {mobileOpen ? (
        <div className="sm:hidden">
          <div className="flex flex-col px-2 pt-2 pb-3 space-y-1">
            {links.map((link) => {
              return (
                <Link href={link.href} key={link.label}>
                  <a className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900">
                    {link.label}
                  </a>
                </Link>
              )
            })}
          </div>
        </div>
      ) : null}
    </nav>
  )
}
