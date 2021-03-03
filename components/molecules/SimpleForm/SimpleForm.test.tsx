import React from "react"
import { render, screen } from "@testing-library/react"
import "../../atoms/Input/node_modules/@testing-library/jest-dom/extend-expect"
import { SimpleForm } from "./SimpleForm"

describe("<SimpleForm />", () => {
  test("it should match snapshot", () => {
    render(<SimpleForm onSubmit={() => Promise.resolve()} submitLabel="submut" fields={[]} />)

    const simpleForm = screen.getByTestId("SimpleForm")

    expect(simpleForm).toMatchSnapshot()
  })
})
