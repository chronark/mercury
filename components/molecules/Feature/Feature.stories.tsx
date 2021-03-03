/* eslint-disable */
import React from "react"
import { storiesOf } from "@storybook/react"
import { Feature } from "./Feature"
import LockClosed from "../../../icons/outline/LockClosed"

storiesOf("molecules/Feature", module).add("default", () => (
  <Feature
    title="SSL Certificates"
    description="Ac tincidunt sapnie vehicula erat aucotr pellentesque rhoncus. Et magna sit morbi labortis."
    icon={<LockClosed />}
  />
))
