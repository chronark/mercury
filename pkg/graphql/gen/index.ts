import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
  Time: any
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any
}

/** 'List' input values */
export type ListInput = {
  title: Scalars["String"]
  todos?: Maybe<ListTodosRelation>
  owner?: Maybe<ListOwnerRelation>
}

/** Allow manipulating the relationship between the types 'List' and 'User' using the field 'List.owner'. */
export type ListOwnerRelation = {
  /** Create a document of type 'User' and associate it with the current document. */
  create?: Maybe<UserInput>
  /** Connect a document of type 'User' with the current document using its ID. */
  connect?: Maybe<Scalars["ID"]>
}

/** Allow manipulating the relationship between the types 'List' and 'Todo'. */
export type ListTodosRelation = {
  /** Create one or more documents of type 'Todo' and associate them with the current document. */
  create?: Maybe<Array<Maybe<TodoInput>>>
  /** Connect one or more documents of type 'Todo' with the current document using their IDs. */
  connect?: Maybe<Array<Maybe<Scalars["ID"]>>>
  /** Disconnect the given documents of type 'Todo' from the current document using their IDs. */
  disconnect?: Maybe<Array<Maybe<Scalars["ID"]>>>
}

export type Mutation = {
  __typename?: "Mutation"
  /** Create a new document in the collection of 'Todo' */
  createTodo: Todo
  /** Update an existing document in the collection of 'User' */
  updateUser?: Maybe<User>
  /** Create a new document in the collection of 'User' */
  createUser: User
  /** Create a new document in the collection of 'List' */
  createList: List
  /** Delete an existing document in the collection of 'Todo' */
  deleteTodo?: Maybe<Todo>
  /** Delete an existing document in the collection of 'User' */
  deleteUser?: Maybe<User>
  /** Delete an existing document in the collection of 'List' */
  deleteList?: Maybe<List>
  /** Update an existing document in the collection of 'List' */
  updateList?: Maybe<List>
  /** Update an existing document in the collection of 'Todo' */
  updateTodo?: Maybe<Todo>
}

export type MutationCreateTodoArgs = {
  data: TodoInput
}

export type MutationUpdateUserArgs = {
  id: Scalars["ID"]
  data: UserInput
}

export type MutationCreateUserArgs = {
  data: UserInput
}

export type MutationCreateListArgs = {
  data: ListInput
}

export type MutationDeleteTodoArgs = {
  id: Scalars["ID"]
}

export type MutationDeleteUserArgs = {
  id: Scalars["ID"]
}

export type MutationDeleteListArgs = {
  id: Scalars["ID"]
}

export type MutationUpdateListArgs = {
  id: Scalars["ID"]
  data: ListInput
}

export type MutationUpdateTodoArgs = {
  id: Scalars["ID"]
  data: TodoInput
}

/** 'Todo' input values */
export type TodoInput = {
  title: Scalars["String"]
  completed: Scalars["Boolean"]
  list?: Maybe<TodoListRelation>
  owner?: Maybe<TodoOwnerRelation>
}

/** Allow manipulating the relationship between the types 'Todo' and 'List' using the field 'Todo.list'. */
export type TodoListRelation = {
  /** Create a document of type 'List' and associate it with the current document. */
  create?: Maybe<ListInput>
  /** Connect a document of type 'List' with the current document using its ID. */
  connect?: Maybe<Scalars["ID"]>
  /** If true, disconnects this document from 'List' */
  disconnect?: Maybe<Scalars["Boolean"]>
}

/** Allow manipulating the relationship between the types 'Todo' and 'User' using the field 'Todo.owner'. */
export type TodoOwnerRelation = {
  /** Create a document of type 'User' and associate it with the current document. */
  create?: Maybe<UserInput>
  /** Connect a document of type 'User' with the current document using its ID. */
  connect?: Maybe<Scalars["ID"]>
}

/** 'User' input values */
export type UserInput = {
  email: Scalars["String"]
}

export type List = {
  __typename?: "List"
  /** The document's ID. */
  _id: Scalars["ID"]
  todos: TodoPage
  owner: User
  title: Scalars["String"]
  /** The document's timestamp. */
  _ts: Scalars["Long"]
}

export type ListTodosArgs = {
  _size?: Maybe<Scalars["Int"]>
  _cursor?: Maybe<Scalars["String"]>
}

/** The pagination object for elements of type 'List'. */
export type ListPage = {
  __typename?: "ListPage"
  /** The elements of type 'List' in this page. */
  data: Array<Maybe<List>>
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars["String"]>
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars["String"]>
}

export type Query = {
  __typename?: "Query"
  allTodos: TodoPage
  allLists: ListPage
  /** Find a document from the collection of 'List' by its id. */
  findListByID?: Maybe<List>
  todosByCompletedFlag: TodoPage
  /** Find a document from the collection of 'User' by its id. */
  findUserByID?: Maybe<User>
  /** Find a document from the collection of 'Todo' by its id. */
  findTodoByID?: Maybe<Todo>
}

export type QueryAllTodosArgs = {
  _size?: Maybe<Scalars["Int"]>
  _cursor?: Maybe<Scalars["String"]>
}

export type QueryAllListsArgs = {
  _size?: Maybe<Scalars["Int"]>
  _cursor?: Maybe<Scalars["String"]>
}

export type QueryFindListByIdArgs = {
  id: Scalars["ID"]
}

export type QueryTodosByCompletedFlagArgs = {
  _size?: Maybe<Scalars["Int"]>
  _cursor?: Maybe<Scalars["String"]>
  completed?: Maybe<Scalars["Boolean"]>
}

export type QueryFindUserByIdArgs = {
  id: Scalars["ID"]
}

export type QueryFindTodoByIdArgs = {
  id: Scalars["ID"]
}

export type Todo = {
  __typename?: "Todo"
  /** The document's ID. */
  _id: Scalars["ID"]
  completed: Scalars["Boolean"]
  owner: User
  title: Scalars["String"]
  list?: Maybe<List>
  /** The document's timestamp. */
  _ts: Scalars["Long"]
}

/** The pagination object for elements of type 'Todo'. */
export type TodoPage = {
  __typename?: "TodoPage"
  /** The elements of type 'Todo' in this page. */
  data: Array<Maybe<Todo>>
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars["String"]>
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars["String"]>
}

export type User = {
  __typename?: "User"
  /** The document's ID. */
  _id: Scalars["ID"]
  /** The document's timestamp. */
  _ts: Scalars["Long"]
  email: Scalars["String"]
}

export const CreateTodoDocument = gql`
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
export type CreateTodoMutationFn = Apollo.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      title: // value for 'title'
 *      owner: // value for 'owner'
 *   },
 * });
 */
export function useCreateTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>,
) {
  return Apollo.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, baseOptions)
}
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>
export type CreateTodoMutationResult = Apollo.MutationResult<CreateTodoMutation>
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>
export const AllTodosDocument = gql`
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

/**
 * __useAllTodosQuery__
 *
 * To run a query within a React component, call `useAllTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTodosQuery(baseOptions?: Apollo.QueryHookOptions<AllTodosQuery, AllTodosQueryVariables>) {
  return Apollo.useQuery<AllTodosQuery, AllTodosQueryVariables>(AllTodosDocument, baseOptions)
}
export function useAllTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTodosQuery, AllTodosQueryVariables>) {
  return Apollo.useLazyQuery<AllTodosQuery, AllTodosQueryVariables>(AllTodosDocument, baseOptions)
}
export type AllTodosQueryHookResult = ReturnType<typeof useAllTodosQuery>
export type AllTodosLazyQueryHookResult = ReturnType<typeof useAllTodosLazyQuery>
export type AllTodosQueryResult = Apollo.QueryResult<AllTodosQuery, AllTodosQueryVariables>
export const TodosByCompletedFlagDocument = gql`
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

/**
 * __useTodosByCompletedFlagQuery__
 *
 * To run a query within a React component, call `useTodosByCompletedFlagQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosByCompletedFlagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosByCompletedFlagQuery({
 *   variables: {
 *      completed: // value for 'completed'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useTodosByCompletedFlagQuery(
  baseOptions: Apollo.QueryHookOptions<TodosByCompletedFlagQuery, TodosByCompletedFlagQueryVariables>,
) {
  return Apollo.useQuery<TodosByCompletedFlagQuery, TodosByCompletedFlagQueryVariables>(
    TodosByCompletedFlagDocument,
    baseOptions,
  )
}
export function useTodosByCompletedFlagLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TodosByCompletedFlagQuery, TodosByCompletedFlagQueryVariables>,
) {
  return Apollo.useLazyQuery<TodosByCompletedFlagQuery, TodosByCompletedFlagQueryVariables>(
    TodosByCompletedFlagDocument,
    baseOptions,
  )
}
export type TodosByCompletedFlagQueryHookResult = ReturnType<typeof useTodosByCompletedFlagQuery>
export type TodosByCompletedFlagLazyQueryHookResult = ReturnType<typeof useTodosByCompletedFlagLazyQuery>
export type TodosByCompletedFlagQueryResult = Apollo.QueryResult<
  TodosByCompletedFlagQuery,
  TodosByCompletedFlagQueryVariables
>
export type CreateTodoMutationVariables = Exact<{
  title: Scalars["String"]
  owner: Scalars["ID"]
}>

export type CreateTodoMutation = { __typename?: "Mutation" } & {
  createTodo: { __typename?: "Todo" } & Pick<Todo, "title" | "completed"> & {
      owner: { __typename?: "User" } & Pick<User, "_id">
    }
}

export type AllTodosQueryVariables = Exact<{ [key: string]: never }>

export type AllTodosQuery = { __typename?: "Query" } & {
  allTodos: { __typename?: "TodoPage" } & {
    data: Array<
      Maybe<
        { __typename?: "Todo" } & Pick<Todo, "title" | "completed"> & {
            owner: { __typename?: "User" } & Pick<User, "_id">
          }
      >
    >
  }
}

export type TodosByCompletedFlagQueryVariables = Exact<{
  completed: Scalars["Boolean"]
  cursor?: Maybe<Scalars["String"]>
}>

export type TodosByCompletedFlagQuery = { __typename?: "Query" } & {
  todosByCompletedFlag: { __typename?: "TodoPage" } & Pick<TodoPage, "after" | "before"> & {
      data: Array<Maybe<{ __typename?: "Todo" } & Pick<Todo, "_id" | "_ts" | "title" | "completed">>>
    }
}
