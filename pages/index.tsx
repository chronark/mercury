import React from "react"
import { SigninForm } from "../components/organisms/SigninForm/SigninForm"
import { Pricing } from "../components/organisms/Pricing/Pricing"
import { Features } from "../components/organisms/Features/Features"
import { Box } from "../components/atoms/Box/Box"
import { Hero } from "../components/organisms/Hero/Hero"
import { Index as Template } from "../components/templates/Index/Index"
import { GetServerSidePropsResult, NextPage, GetServerSidePropsContext } from "next"
import { Feature } from "../components/molecules/Feature/Feature"
import Share from "../icons/outline/Share"
import ViewList from "../icons/outline/ViewList"
import Link from "../icons/outline/Link"
import { Navbar } from "../components/organisms/Navbar/Navbar"
import { getUserIfPresent, User } from "../pkg/auth"
export interface IndexProps {
  user?: User
}

export const Index: NextPage<IndexProps> = ({ user }): JSX.Element => (
  <Template navbar={<Navbar user={user} />}>
    <Hero
      title="All your shopping lists in one place"
      subtitle="Share your shopping lists with your partner and never forget
        anything"
      CTA={
        <Box>
          <h3 className="mb-6 text-2xl font-medium text-center">Sign in to your account</h3>
          <SigninForm />
        </Box>
      }
    />
    <Features>
      <Feature
        title="All your lists in one place"
        description="One place to save all your lists. No need to have multiple apps."
        icon={<ViewList />}
      />
      <Feature
        title="Share your lists"
        description="Share your shopping lists with anyone and work on them together"
        icon={<Share />}
      />
      <Feature
        title="Synced to all devices"
        description="Automatically synced to your phone, tablet or desktop"
        icon={<Link />}
      />
    </Features>
    <Pricing />
  </Template>
)

export default Index

export async function getServerSideProps(
  ctx: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<IndexProps>> {
  const user = await getUserIfPresent(ctx)
  return { props: { user } }
}
