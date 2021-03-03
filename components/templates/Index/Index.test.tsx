import React from "react"
import { render, screen } from "@testing-library/react"
import "../../molecules/Footer/node_modules/@testing-library/jest-dom/extend-expect"
import Index from "./Index"

describe("<Index />", () => {
  test("it should mount", () => {
    render(<Index />)

    const index = screen.getByTestId("Index")

    expect(index).toBeInTheDocument()
  })
})
