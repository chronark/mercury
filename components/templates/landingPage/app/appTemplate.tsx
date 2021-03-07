import React from "react"
import { Footer } from "../../../molecules/Footer/Footer"

export interface AppTemplateProps {
  navbar: React.ReactNode
}

export const AppTemplate: React.FC<AppTemplateProps> = ({ children, navbar }) => {
  return (
    <div className="container flex flex-col mx-auto space-y-40">
      <div className="fixed inset-x-0 shadow-lg">{navbar}</div>
      {children}
      <Footer />
    </div>
  )
}
