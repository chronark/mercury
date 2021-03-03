/* eslint-disable */
import React from "react"
import { storiesOf } from "@storybook/react"
import { Price } from "./Price"

storiesOf("molecules/Price", module)
  .add("Premium", () => (
    <Price
      title="Premium"
      description="Cool pricing"
      price={2}
      interval="month"
      bullets={["Share lists with anyone", "Import from recipes", "Premium Support"]}
      href="#"
      highlighted
    />
  ))
  .add("Free", () => (
    <Price
      title="Try it for free"
      description="Probably still better than other managers"
      price={0}
      bullets={["Unlimited items", "2 Lists", "Something else"]}
      href="#"
    />
  ))
