import React from "react"
import { SigninForm } from "../../components/organisms/SigninForm/SigninForm"
export const Signin = (): JSX.Element => {
  return (
    <section className="bg-white ">
      <div className="h-screen mx-auto max-w-7xl">
        <div className="flex flex-col h-full lg:flex-row">
          <div className="relative w-full h-full bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100">
            <div className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
              <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                <div className="relative">
                  <h2 className="text-5xl font-bold text-gray-900 xl:text-6xl">Welcome back</h2>
                </div>
                <p className="text-2xl font-normal text-gray-500">Sign in to organize everything</p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full bg-white lg:w-6/12 xl:w-5/12">
            <div className="flex flex-col items-center justify-start w-full p-10 lg:p-16 xl:p-24">
              <h4 className="w-full text-3xl font-bold">Create an account or sign in</h4>
              <SigninForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signin
