import React, { useState, useEffect, ReactNode } from "react"
import { Footer } from "../../molecules/Footer/Footer"

export interface IndexProps {
  navbar: React.ReactNode
}

export const Index: React.FC<IndexProps> = ({ children, navbar }) => {
  const [y, setY] = useState(0)
  const updateY = () => setY(window.pageYOffset)
  useEffect(() => {
    if (process.browser) {
      window.addEventListener("scroll", updateY, {
        passive: true,
      })
    }
    return () => window.removeEventListener("scroll", updateY)
  }, [])

  // We are looping through the children later, so in case there is only one child we have to convert it to an array.
  if (!(children as ReactNode[]).length) {
    children = [children]
  }

  return (
    <div className="container flex flex-col mx-auto space-y-40">
      <div className={`fixed inset-x-0 ${y > 20 * 4 ? "shadow-lg" : ""}`}>{navbar}</div>
      {(children as ReactNode[]).map((child: React.ReactNode, key: number) => (
        <div key={key} className="px-4">
          {child}
        </div>
      ))}
      <Footer />
    </div>
  )
}
