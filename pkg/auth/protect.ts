import { authClient } from "../fauna"
import { CurrentIdentity } from "faunadb"
import { GetServerSidePropsContext } from "next"
import { getTokenFromContext } from "./cookies"
export interface User {
  id: string
  token: string
}

/**
 * Check if a user is present and return it.
 * Only used in the `/` page. all other pages are only allowed for users to access.
 * @param ctx
 */
export async function getUserIfPresent(ctx: GetServerSidePropsContext): Promise<User | null> {
  const token = getTokenFromContext(ctx)
  if (!token) {
    return null
  }

  const user = (await authClient(token).query(CurrentIdentity())) as { id: string }
  return { id: user.id, token }
}
/**
 * Ensure this page is only available to users by redirecting everyone else to `/auth/signin`
 * @param ctx
 * @returns A user with their fauna id and opaque token. The token is mainly used in the apollo client to authorize the user's graphql queries.
 */
export async function requireUser(ctx: GetServerSidePropsContext): Promise<User> {
  const token = getTokenFromContext(ctx)
  if (!token) {
    ctx.res.writeHead(302, { Location: "/auth/signin" })
    return
  }

  const user = (await authClient(token).query(CurrentIdentity())) as { id: string }
  return { id: user.id, token }
}
