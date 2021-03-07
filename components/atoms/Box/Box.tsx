import React from "react"

export interface BoxProps {
  className?: string
  paddingOverwrite?: string
}

export const Box: React.FC<BoxProps> = ({ children, className, paddingOverwrite }) => (
  <div className={`${paddingOverwrite || "p-8"} bg-white rounded shadow-2xl`}>
    <div className={className}>{children}</div>
  </div>
)
