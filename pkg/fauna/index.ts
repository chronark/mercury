import { Client } from "faunadb"

export const guestClient = new Client({
  secret: process.env.FAUNA_SERVER_TOKEN,
})

export function authClient(secret: string): Client {
  return new Client({ secret })
}
