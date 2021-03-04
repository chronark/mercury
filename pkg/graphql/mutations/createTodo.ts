import { gql } from "@apollo/client"

export const createTodoQuery = gql`
  mutation CreateTodo($title: String!, $owner: ID!) {
    createTodo(data: { title: $title, completed: false, owner: { connect: $owner } }) {
      title
      completed
      owner {
        _id
      }
    }
  }
`
