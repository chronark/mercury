import React from "react"
import { render, screen } from "@testing-library/react"
import "../../../organisms/Navbar/node_modules/@testing-library/jest-dom/extend-expect"
import { Primary } from "./Primary"

describe("<Primary />", () => {
  test("it should match snapshot", () => {
    render(<Primary label="submit" href="#" />)

    const primary = screen.getByTestId("Primary")

    expect(primary).toMatchSnapshot()
  })
})
