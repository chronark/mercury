import { useQuery } from "react-query"
import { authClient } from "../fauna"
import { query as q } from "faunadb"

export interface User {
  id: string
  email: string
}

export const useUser = (token: string): [User, boolean, Error] => {
  const { isLoading, error, data: user } = useQuery("user", async () => {
    const { ref, data } = (await authClient(token).query(q.Get(q.CurrentIdentity()))) as {
      ref: { id: string }
      data: { email: string }
    }
    return {
      id: ref.id,
      email: data.email,
    }
  })

  return [user, isLoading, error as Error]
}
