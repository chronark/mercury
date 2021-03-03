import React from "react"

export interface BoxProps {
  className?: string
}

export const Box: React.FC<BoxProps> = ({ children, className }) => (
  <div className="p-8 bg-white rounded shadow-2xl">
    <div className={className}>{children}</div>
  </div>
)
