import React from "react"
import { render, screen } from "@testing-library/react"
import "../../templates/Index/node_modules/@testing-library/jest-dom/extend-expect"
import { Logo } from "./Logo"

describe("<Logo />", () => {
  test("it should match snapshot", () => {
    render(<Logo />)

    const logo = screen.getByTestId("Logo")

    expect(logo).toMatchSnapshot()
  })
})
