import React from "react"
import renderer from "react-test-renderer"
import { Box } from "./Box"

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Box>
        <span>Hello World</span>
      </Box>,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
