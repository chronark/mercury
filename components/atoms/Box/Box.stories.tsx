/* eslint-disable */
import React from "react"
import { storiesOf } from "@storybook/react"
import { Box } from "./Box"

storiesOf("atoms/Box", module).add("default", () => (
  <Box>
    <div className="p-4">Something inside</div>
  </Box>
))
