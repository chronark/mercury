import { gql } from "@apollo/client"

export const todosByCompletedFlag = gql`
  query TodosByCompletedFlag($completed: Boolean!, $cursor: String) {
    todosByCompletedFlag(completed: $completed, _cursor: $cursor) {
      data {
        _id
        _ts
        title
        completed
      }
      after
      before
    }
  }
`
