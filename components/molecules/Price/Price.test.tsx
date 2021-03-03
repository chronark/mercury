import React from "react"
import { render, screen } from "@testing-library/react"
import "../../atoms/Box/node_modules/@testing-library/jest-dom/extend-expect"
import { Price } from "./Price"

describe("<Price />", () => {
  test("it should match snapshot", () => {
    render(
      <Price
        title="Title"
        description="description"
        price={2}
        interval="month"
        href="#"
        bullets={["Hello", "World"]}
      />,
    )

    const price = screen.getByTestId("Price")

    expect(price).toMatchSnapshot()
  })
})
