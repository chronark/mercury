/* eslint-disable */
import React from "react"
import { storiesOf } from "@storybook/react"
import { Hero } from "./Hero"
import { Box } from "../../atoms/Box/Box"
import { SimpleForm } from "../../molecules/SimpleForm/SimpleForm"
storiesOf("organisms/Hero", module).add("default", () => (
  <Hero
    title="All your shopping lists in one place"
    subtitle="Share your shopping lists with your partner and never forget
    anything"
    CTA={<Box>{/* <SignInForm /> */}</Box>}
  />
))
