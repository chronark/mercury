import { Client } from "faunadb"

export const serverClient = new Client({
  secret: process.env.FAUNADB_SECRET,
})

export function authClient(secret: string): Client {
  return new Client({ secret })
}
