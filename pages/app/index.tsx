import React from "react"
import { Index as Template } from "../../components/templates/Index/Index"
import { NextPage, GetServerSidePropsResult, GetServerSidePropsContext } from "next"
import { Navbar } from "../../components/organisms/Navbar/Navbar"
import { useCreateTodoMutation, useAllTodosQuery } from "../../pkg/graphql/gen"
import { requireUser, User } from "../../pkg/auth"
export interface Props {
  user: User
}

export const Index: NextPage<Props> = ({ user }): JSX.Element => {
  const [createTodoMutation, { data: newTodo }] = useCreateTodoMutation({
    variables: { title: "Hello World", owner: user.id },
  })
  const { data, loading, error, refetch } = useAllTodosQuery({ variables: {} })
  return (
    <Template navbar={<Navbar user={user} />}>
      <div>
        <div>{user.token}</div>
        {data?.allTodos.data.map((todo, key) => {
          return <div key={key}>{todo.title}</div>
        })}
        <div>{loading}</div>
        <div>{error?.message}</div>
        <div>{newTodo?.createTodo?.owner._id}</div>
        <button onClick={() => createTodoMutation().then(() => refetch())}>go</button>
      </div>
    </Template>
  )
}

export default Index

export async function getServerSideProps(ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<Props>> {
  const user = await requireUser(ctx)

  return { props: { user } }
}
