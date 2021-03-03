import React from "react"
import { render, screen } from "@testing-library/react"
import "../../atoms/Input/node_modules/@testing-library/jest-dom/extend-expect"
import SignInForm from "./SimpleForm"

describe("<SignInForm />", () => {
  test("it should mount", () => {
    render(<SignInForm />)

    const signInForm = screen.getByTestId("SignInForm")

    expect(signInForm).toBeInTheDocument()
  })
})
