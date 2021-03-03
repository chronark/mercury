import React from "react"
import { Index as Template } from "../../components/templates/Index/Index"
import { NextPage, GetServerSidePropsResult, GetServerSidePropsContext } from "next"
import { getTokenFromContext } from "../../pkg/auth/cookies"
import { Navbar } from "../../components/organisms/Navbar/Navbar"
export interface Props {
  token: string
}

export const Index: NextPage<Props> = ({ token }): JSX.Element => {
  return (
    <Template navbar={<Navbar token={token} />}>
      <div>{token}</div>
    </Template>
  )
}

export default Index

export async function getServerSideProps(ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<Props>> {
  const token = getTokenFromContext(ctx)
  return { props: { token: token || null } }
}
