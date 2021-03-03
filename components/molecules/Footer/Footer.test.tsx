import React from "react"
import { render, screen } from "@testing-library/react"
import "../Feature/node_modules/@testing-library/jest-dom/extend-expect"
import { Footer } from "./Footer"

describe("<Footer />", () => {
  test("it should match snapshot", () => {
    render(<Footer />)

    const footer = screen.getByTestId("Footer")

    expect(footer).toMatchSnapshot()
  })
})
