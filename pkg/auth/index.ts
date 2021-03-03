import { getTokenFromContext } from "./cookies"

import { GetServerSidePropsContext } from "next"
export interface User {
  email: string
  token: string
}

export function requireUser(ctx: GetServerSidePropsContext): string {
  const token = getTokenFromContext(ctx)
  if (!token) {
    ctx.res.writeHead(302, { Location: "/auth/signin" })
    ctx.res.end()
    return
  }

  return token
}

/**
 * Creates a new account and returns an access token.
 * @param email
 * @param password
 */
export async function signin(email: string, password: string): Promise<void> {
  const res = await fetch("/api/auth/signin", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  })
  if (!res.ok) {
    throw new Error(await res.text())
  }
}
