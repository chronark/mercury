// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"
import { ApolloClient, InMemoryCache, gql } from "@apollo/client"
const client = new ApolloClient({
  uri: "https://graphql.fauna.com/graphql",
  headers: {
    authorization: `Bearer ${process.env.FAUNA_CLIENT_TOKEN}`,
  },
  cache: new InMemoryCache(),
})

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const queryResponse = await client.query({
    query: gql`
      query FindAllTodos {
        allTodos {
          data {
            _id
            title
            completed
            list {
              title
            }
          }
        }
      }
    `,
  })
  queryResponse.data
  res.json(queryResponse)
  res.end()
}

export default handler
