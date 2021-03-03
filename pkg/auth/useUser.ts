import { useQuery } from "react-query"
import { authClient } from "../fauna"
import { query as q } from "faunadb"

export interface User {
  id: string
  email: string
}

export const useUser = (token: string): [User, boolean, Error] => {
  const { isLoading, error, data } = useQuery("user", async () => {
    const ref = await authClient(token).query(q.Get(q.CurrentIdentity()))
    return {
      id: ref.ref.id,
      email: ref.data.email,
    }
  })

  return [data, isLoading, error as Error]
}
