import React from "react"
import { render, screen } from "@testing-library/react"
import "../../molecules/Footer/node_modules/@testing-library/jest-dom/extend-expect"
import { Index } from "./Index"
import { Navbar } from "../../organisms/Navbar/Navbar"

describe("<Index />", () => {
  test("it should match snapshot", () => {
    render(<Index navbar={<Navbar />} />)

    const index = screen.getByTestId("Index")

    expect(index).toMatchSnapshot()
  })
})
