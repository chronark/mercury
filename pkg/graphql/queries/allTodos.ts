import { gql } from "@apollo/client"

export const allTodosQuery = gql`
  query AllTodos {
    allTodos {
      data {
        title
        completed
        owner {
          _id
        }
      }
    }
  }
`
