import { query as q } from "faunadb"

import { serverClient } from "../../../pkg/fauna"
import { setAuthCookie } from "../../../pkg/auth/cookies"
import { NextApiRequest, NextApiResponse } from "next"

export default async function signup(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const { email, password } = JSON.parse(req.body)
    if (!email) {
      throw new Error("")
    }

    const emailExists = await serverClient.query(q.Exists(q.Match(q.Index("user_by_email"), q.Casefold(email))))
    if (!emailExists) {
      console.log("Email not found")
      await serverClient
        .query(q.Create(q.Collection("users"), { credentials: { password }, data: { email } }))
        .catch((err) => {
          throw new Error(err.description)
        })
    }

    const user = (await serverClient
      .query(q.Login(q.Match(q.Index("user_by_email"), email), { password }))
      .catch((err) => {
        throw new Error(err.description)
      })) as { secret: string }

    if (!user.secret) {
      throw new Error("Unable to issue a token for this user")
    }

    setAuthCookie(res, user.secret)

    res.status(200)
  } catch (err) {
    res.status(500)
    res.send(err.message)
  } finally {
    res.end()
  }
}
