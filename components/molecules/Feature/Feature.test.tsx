import React from "react"
import { render, screen } from "@testing-library/react"
import "../../organisms/Features/node_modules/@testing-library/jest-dom/extend-expect"
import { Feature } from "./Feature"
import Exclamation from "../../../icons/solid/Exclamation"

describe("<Feature />", () => {
  test("it should match snapshot", () => {
    render(<Feature title="Title" description="Description" icon={<Exclamation />} />)

    const feature = screen.getByTestId("Feature")

    expect(feature).toMatchSnapshot()
  })
})
