import React from "react"
import { render, screen } from "@testing-library/react"
import "../../atoms/Logo/node_modules/@testing-library/jest-dom/extend-expect"
import { Navbar } from "./Navbar"

describe("<Navbar />", () => {
  test("it should match snapshot", () => {
    render(<Navbar />)

    const navbar = screen.getByTestId("Navbar")

    expect(navbar).toMatchSnapshot()
  })
})
