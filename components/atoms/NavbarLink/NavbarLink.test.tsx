import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import {NavbarLink} from "./NavbarLink"

describe("<NavbarLink />", () => {
  test("it should mount", () => {
    render(<NavbarLink href="#" label="Home" />)

    const navbarLink = screen.getByTestId("NavbarLink")

    expect(navbarLink).toBeInTheDocument()
  })
})
