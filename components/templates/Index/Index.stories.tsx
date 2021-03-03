/* eslint-disable */
import React from "react"
import { storiesOf } from "@storybook/react"
import { Index } from "./Index"
import { Navbar } from "../../organisms/Navbar/Navbar"

storiesOf("Index", module).add("default", () => <Index navbar={<Navbar />} />)
