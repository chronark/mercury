import { query as q } from "faunadb"
import { authClient } from "../../../pkg/fauna"
import { getTokenFromApiRequest, removeAuthCookie } from "../../../pkg/auth/cookies"
import { NextApiRequest, NextApiResponse } from "next"

export default async function signout(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const token = getTokenFromApiRequest(req)
    if (token === null) {
      // Already signed out
      res.status(200)
      return
    }
    await authClient(token).query(q.Logout(true))
    removeAuthCookie(res)
    res.redirect("/")

    res.status(200)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  } finally {
    res.end()
  }
}
