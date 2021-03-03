import React from "react"

export interface HeroProps {
  title: string
  subtitle: string
  CTA?: React.ReactNode
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, CTA }) => {
  return (
    <div className="max-w-5xl px-4 mx-auto">
      <div className="flex flex-col items-center md:flex-row">
        <div className="w-full space-y-5 md:w-3/5 md:pr-16">
          <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">{title}</h2>
          <p className="text-xl text-gray-600 md:pr-16">{subtitle}</p>
        </div>

        <div className="w-full mt-16 md:mt-0 md:w-2/5">{CTA}</div>
      </div>
    </div>
  )
}
