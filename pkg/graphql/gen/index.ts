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
  allLists: ListPage
  ownedLists?: Maybe<Array<Maybe<List>>>
  /** Find a document from the collection of 'List' by its id. */
  findListByID?: Maybe<List>
  /** Find a document from the collection of 'User' by its id. */
  findUserByID?: Maybe<User>
  /** Find a document from the collection of 'Todo' by its id. */
  findTodoByID?: Maybe<Todo>
}

export type QueryAllListsArgs = {
  _size?: Maybe<Scalars["Int"]>
  _cursor?: Maybe<Scalars["String"]>
}

export type QueryFindListByIdArgs = {
  id: Scalars["ID"]
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

export const CreateNewListDocument = gql`
  mutation createNewList($title: String!, $owner: ID!) {
    createList(data: { title: $title, owner: { connect: $owner } }) {
      title
      owner {
        _id
      }
    }
  }
`
export type CreateNewListMutationFn = Apollo.MutationFunction<CreateNewListMutation, CreateNewListMutationVariables>

/**
 * __useCreateNewListMutation__
 *
 * To run a mutation, you first call `useCreateNewListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewListMutation, { data, loading, error }] = useCreateNewListMutation({
 *   variables: {
 *      title: // value for 'title'
 *      owner: // value for 'owner'
 *   },
 * });
 */
export function useCreateNewListMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateNewListMutation, CreateNewListMutationVariables>,
) {
  return Apollo.useMutation<CreateNewListMutation, CreateNewListMutationVariables>(CreateNewListDocument, baseOptions)
}
export type CreateNewListMutationHookResult = ReturnType<typeof useCreateNewListMutation>
export type CreateNewListMutationResult = Apollo.MutationResult<CreateNewListMutation>
export type CreateNewListMutationOptions = Apollo.BaseMutationOptions<
  CreateNewListMutation,
  CreateNewListMutationVariables
>
export const GetOwnedListsDocument = gql`
  query getOwnedLists {
    ownedLists {
      title
      _id
    }
  }
`

/**
 * __useGetOwnedListsQuery__
 *
 * To run a query within a React component, call `useGetOwnedListsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOwnedListsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOwnedListsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOwnedListsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetOwnedListsQuery, GetOwnedListsQueryVariables>,
) {
  return Apollo.useQuery<GetOwnedListsQuery, GetOwnedListsQueryVariables>(GetOwnedListsDocument, baseOptions)
}
export function useGetOwnedListsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetOwnedListsQuery, GetOwnedListsQueryVariables>,
) {
  return Apollo.useLazyQuery<GetOwnedListsQuery, GetOwnedListsQueryVariables>(GetOwnedListsDocument, baseOptions)
}
export type GetOwnedListsQueryHookResult = ReturnType<typeof useGetOwnedListsQuery>
export type GetOwnedListsLazyQueryHookResult = ReturnType<typeof useGetOwnedListsLazyQuery>
export type GetOwnedListsQueryResult = Apollo.QueryResult<GetOwnedListsQuery, GetOwnedListsQueryVariables>
export type CreateNewListMutationVariables = Exact<{
  title: Scalars["String"]
  owner: Scalars["ID"]
}>

export type CreateNewListMutation = { __typename?: "Mutation" } & {
  createList: { __typename?: "List" } & Pick<List, "title"> & { owner: { __typename?: "User" } & Pick<User, "_id"> }
}

export type GetOwnedListsQueryVariables = Exact<{ [key: string]: never }>

export type GetOwnedListsQuery = { __typename?: "Query" } & {
  ownedLists?: Maybe<Array<Maybe<{ __typename?: "List" } & Pick<List, "title" | "_id">>>>
}
