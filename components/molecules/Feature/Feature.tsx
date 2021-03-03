import React from "react"
import { Box } from "../../atoms/Box/Box"

export interface FeatureProps {
  title: string
  description: string
  icon: React.ReactNode
}

export const Feature: React.FC<FeatureProps> = ({ title, description, icon }) => (
  <Box className="flex flex-col items-center">
    <div className="-mt-16">
      <div className="w-16 h-16 p-2 rounded shadow-xl bg-gradient-to-tr from-blue-700 to-lightBlue-500">
        <span className="text-white">{icon}</span>
      </div>
    </div>
    <h2 className="mt-6 text-2xl font-medium text-black">{title}</h2>
    <p className="mt-6 text-gray-600">{description}</p>
  </Box>
)
