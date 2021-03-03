/* eslint-disable */
import React from "react"
import { storiesOf } from "@storybook/react"
import { SimpleForm } from "./SimpleForm"

storiesOf("molecules/SimpleForm", module).add("signin", () => (
  <SimpleForm
    submitLabel="Submit"
    onSubmit={(fields) => {
      console.log(fields)
    }}
    fields={[
      {
        type: "email",
        name: "email",
        placeholder: "Your Email",
        register: { required: true },
      },
      {
        type: "password",
        name: "password",
        placeholder: "Your Password",
        register: { required: true },
      },
    ]}
  />
))
