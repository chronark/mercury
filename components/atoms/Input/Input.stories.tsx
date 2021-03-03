/* eslint-disable */
import React from "react"
import { storiesOf } from "@storybook/react"
import Input from "./Input"

storiesOf("atoms/Input", module)
  .add("text", () => <Input type="text" name="text" value="" setValue={() => {}} placeholder="placeholder" />)
  .add("email", () => <Input type="email" name="email" value="" setValue={() => {}} placeholder="your@email.com" />)
  .add("password", () => (
    <Input type="password" name="password" value="" setValue={() => {}} placeholder="placeholder" />
  ))
