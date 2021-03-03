/* eslint-disable */
import React from "react"
import { storiesOf } from "@storybook/react"
import { Primary } from "./Primary"
import path from "path"
storiesOf("atoms/button/Primary", module)
  .add("default", () => <Primary label="Label" href="#" />)
  .add("highlighted", () => <Primary label="Label" href="#" highlighted />)
