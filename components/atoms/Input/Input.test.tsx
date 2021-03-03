import React from "react"
import { render, screen } from "@testing-library/react"
import "../button/Primary/node_modules/@testing-library/jest-dom/extend-expect"
import Input from "./Input"

describe("<Input />", () => {
  test("it should mount", () => {
    render(<Input />)

    const input = screen.getByTestId("Input")

    expect(input).toBeInTheDocument()
  })
})
