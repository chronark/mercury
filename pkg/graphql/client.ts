import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client"

/**
 * Creates a new apollo client using the given token.
 * Falls back to a guest token supplied via NEXT_PUBLIC_FAUNA_GUEST_SECRET
 * @param token
 */
export const apolloClient = (token: string): ApolloClient<NormalizedCacheObject> => {
  if (!token) {
    token = process.env.NEXT_PUBLIC_FAUNA_GUEST_SECRET
  }

  if (!token) {
    throw new Error(
      "No token found. Either set one manually or via the environment variable NEXT_PUBLIC_FAUNA_GUEST_SECRET",
    )
  }

  return new ApolloClient({
    uri: "https://graphql.fauna.com/graphql",
    headers: {
      authorization: `Bearer ${token}`,
    },
    cache: new InMemoryCache(),
  })
}
