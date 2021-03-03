import React from "react"
import { render, screen } from "@testing-library/react"
import "../Hero/node_modules/@testing-library/jest-dom/extend-expect"
import Pricing from "./Pricing"

describe("<Pricing />", () => {
  test("it should mount", () => {
    render(<Pricing />)

    const pricing = screen.getByTestId("Pricing")

    expect(pricing).toBeInTheDocument()
  })
})
