import React from "react"
import { NextPage, GetServerSidePropsResult, GetServerSidePropsContext } from "next"
import { AppNavbar } from "../../components/organisms/AppNavbar/AppNavbar"
import { useGetOwnedListsQuery, useCreateNewListMutation } from "../../pkg/graphql/gen"
import { requireUser, User } from "../../pkg/auth"
import { Box } from "../../components/atoms/Box/Box"
import { AppTemplate } from "../../components/templates/landingPage/app/appTemplate"
export interface Props {
  user: User
}

export interface ListProps {
  title: string
  todos?: { title: string }[]
}
const List: React.FC<ListProps> = ({ title, todos }): JSX.Element => {
  return (
    <Box paddingOverwrite="p-2">
      <div className="flex justify-between px-4 py-4 mt-4 bg-white rounded-lg shadow-sm cursor-pointer dark:bg-gray-600">
        <div className="flex justify-center">
          <img
            className="object-cover w-12 h-12 rounded-full"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            alt=""
          />

          <div className="flex flex-col px-2 text-gray-600 capitalize">
            <span className="font-bold text-md">{title}</span>
            <span className="mt-1 text-sm font-semibold text-gray-400">{todos?.length ?? 0} Items</span>
          </div>
        </div>

        <div className="flex pr-8">
          <div className="flex flex-col pl-4 ml-16 text-gray-600 capitalize dark:text-gray-400">
            <span className="px-4 py-1 mt-2 text-red-400 bg-red-100 rounded text-semibold dark:text-gray-200">New</span>
          </div>

          <div className="flex flex-col pt-2 ml-4 text-gray-600 capitalize ">
            <div>
              <span className="flex mt-2">
                <img
                  className="inline-block w-10 h-8 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block w-8 h-8 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </span>
            </div>
          </div>

          <div className="flex flex-col pt-3 ml-16 text-gray-600 capitalize dark:text-gray-400">
            <p>
              <span className="font-bold">New Chili piper license - </span>Hey Schott, have you lorem ipsum dolor sit
              amet
            </p>
          </div>
        </div>
      </div>
    </Box>
  )
}

export const Index: NextPage<Props> = ({ user }): JSX.Element => {
  const [createList] = useCreateNewListMutation()
  const { data, loading, error } = useGetOwnedListsQuery()
  console.log({ data, loading, error })

  return (
    <AppTemplate navbar={<AppNavbar />}>
      <div>
        <button onClick={() => createList({ variables: { title: "Hello World", owner: user.id } })}>Add new</button>
        <div className="w-full space-y-5">
          <p className="font-medium text-blue-600 uppercase">Your lists</p>
          {error ? <p className="text-red-500">{error.message}</p> : null}
          {data ? (
            data.ownedLists.map((list) => (
              <div key={list._id}>
                <List title={list.title} />
              </div>
            ))
          ) : (
            <p>No lists found</p>
          )}
        </div>
        <div className="w-full space-y-5">
          <p className="font-medium text-blue-600 uppercase">Lists shared with you</p>
          {/* <List /> */}
        </div>
      </div>
    </AppTemplate>
  )
}

export default Index

export async function getServerSideProps(ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<Props>> {
  const user = await requireUser(ctx)

  return { props: { user } }
}
