/* eslint-disable */
import React from "react"
import { storiesOf } from "@storybook/react"
import { LandingPageTemplate } from "./landingPageTemplate"
import { Navbar } from "../../organisms/Navbar/LandingNavbar"

storiesOf("LandingPageTemplate", module).add("default", () => <LandingPageTemplate navbar={<Navbar />} />)
