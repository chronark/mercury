import React from "react"

export const Features: React.FC = ({ children }) => (
  <div className="grid grid-cols-1 gap-16 px-4 md:grid-cols-2 lg:grid-cols-3">{children}</div>
)
