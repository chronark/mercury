import React from "react"
import { render, screen } from "@testing-library/react"
import "../../molecules/SimpleForm/node_modules/@testing-library/jest-dom/extend-expect"
import { Box } from "./Box"

describe("<Box />", () => {
  test("it should match snapshot", () => {
    render(<Box />)

    const box = screen.getByTestId("Box")

    expect(box).toMatchSnapshot()
  })
})
