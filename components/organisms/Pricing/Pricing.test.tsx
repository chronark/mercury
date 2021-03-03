import React from "react"
import { render, screen } from "@testing-library/react"
import "../Hero/node_modules/@testing-library/jest-dom/extend-expect"
import { Pricing } from "./Pricing"

describe("<Pricing />", () => {
  test("it should match snapshot", () => {
    render(<Pricing />)

    const pricing = screen.getByTestId("Pricing")

    expect(pricing).toMatchSnapshot()
  })
})
