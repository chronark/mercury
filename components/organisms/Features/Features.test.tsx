import React from "react"
import { render, screen } from "@testing-library/react"
import "../SigninForm/node_modules/@testing-library/jest-dom/extend-expect"
import { Features } from "./Features"

describe("<Features />", () => {
  test("it should match snapshot", () => {
    render(<Features />)

    const features = screen.getByTestId("Features")

    expect(features).toMatchSnapshot()
  })
})
