/* eslint-disable */
import React from "react"
import { storiesOf } from "@storybook/react"
import { Navbar } from "./LandingNavbar"

storiesOf("organisms/Navbar", module)
  .add("default", () => <Navbar />)
  .add("with user", () => <Navbar user={{ id: "1", token: "abc" }} />)
