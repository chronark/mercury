import React from "react"
import { Clickable, ClickableProps } from "./Clickable"
import NextLink from "next/link"
export interface LinkProps extends ClickableProps {
  href: string
}
/**
 * A link to redirect the user
 *
 * When you only want to have a single icon displyed, simply omit `label` and set your icon either as `prefix` or `suffix`
 */
export const Link: React.FC<LinkProps> = (props) => {
  return (
    <NextLink href={props.href}>
      <a className="w-full focus:outline-none">
        <Clickable {...props} />
      </a>
    </NextLink>
  )
}
