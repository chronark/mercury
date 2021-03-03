import React from "react"
import { render, screen } from "@testing-library/react"
import "../../atoms/Box/node_modules/@testing-library/jest-dom/extend-expect"
import Price from "./Price"

describe("<Price />", () => {
  test("it should mount", () => {
    render(<Price />)

    const price = screen.getByTestId("Price")

    expect(price).toBeInTheDocument()
  })
})
