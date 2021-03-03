import React from "react"
import { Box } from "../../atoms/Box/Box"
import { Price } from "../../molecules/Price/Price"
export const Pricing: React.FC = () => (
  <div className="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-8 max-w-7xl">
    <div className="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
      <h2 className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
        Simple, Transparent Pricing
      </h2>
      <p className="box-border mt-2 text-xl text-gray-900 border-solid sm:text-2xl"></p>
    </div>
    <div className="flex flex-col mt-4 space-y-8 leading-7 text-gray-900 border-0 border-gray-200 md:space-x-16 md:space-y-0 md:flex-row sm:mt-6 md:mt-8 ">
      <Box>
        <Price
          title="Try it for free"
          description="Probably still better than other managers"
          price={0}
          bullets={["Unlimited items", "2 Lists", "Something else"]}
          href="#"
        />
      </Box>
      <Box>
        <Price
          title="Premium"
          description="Cool pricing"
          price={2}
          interval="month"
          bullets={["Share lists with anyone", "Import from recipes", "Premium Support"]}
          href="#"
          highlighted
        />
      </Box>
    </div>
  </div>
)
