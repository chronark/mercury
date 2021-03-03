/* eslint-disable */
import React from "react"
import { storiesOf } from "@storybook/react"
import Input from "./Input"

storiesOf("atoms/Input", module)
  .add("text", () => <Input type="text" name="text" placeholder="placeholder" />)
  .add("email", () => <Input type="email" name="email" placeholder="your@email.com" />)
  .add("password", () => <Input type="password" name="password" placeholder="placeholder" />)
