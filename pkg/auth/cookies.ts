import { serialize, parse } from "cookie"
import { NextApiRequest, NextApiResponse, GetServerSidePropsContext } from "next"

const TOKEN_NAME = "faunaToken"
const MAX_AGE = 60 * 60 * 8 // 8 hours

export function setAuthCookie(res: NextApiResponse, token: string): void {
  const cookie = serialize(TOKEN_NAME, token, {
    httpOnly: true,
    maxAge: MAX_AGE,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  })

  res.setHeader("Set-Cookie", cookie)
}

export function removeAuthCookie(res: NextApiResponse): void {
  const cookie = serialize(TOKEN_NAME, "", {
    httpOnly: true,
    maxAge: -1,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  })
  res.setHeader("Set-Cookie", cookie)
}
/**
 * Retrieve the fauna auth token from a request.
 * @param req
 * @return The token or null if not found.
 */
export function getTokenFromApiRequest(req: NextApiRequest): string {
  const token = req.cookies[TOKEN_NAME]
  return token ? token : null
}

export function getTokenFromContext(ctx: GetServerSidePropsContext): string {
  const cookies = parse(ctx.req.headers.cookie || "")
  if (!cookies[TOKEN_NAME]) {
    return null
  }
  return cookies[TOKEN_NAME]
}
