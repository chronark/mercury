import React from "react"
import { render, screen } from "@testing-library/react"
import "../../molecules/Price/node_modules/@testing-library/jest-dom/extend-expect"
import Hero from "./Hero"

describe("<Hero />", () => {
  test("it should mount", () => {
    render(<Hero />)

    const hero = screen.getByTestId("Hero")

    expect(hero).toBeInTheDocument()
  })
})
