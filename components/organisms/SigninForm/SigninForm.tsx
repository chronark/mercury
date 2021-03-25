import React, { useState } from "react"
import { useRouter } from "next/router"
import { SimpleForm } from "../../molecules/SimpleForm/SimpleForm"
import { Spinner } from "../../atoms/spinner/Spinner"
import { signin } from "../../../pkg/auth"
export const SigninForm: React.FC = () => {
  const router = useRouter()

  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string>(null)
  const submit = async ({ email, password }: Record<string, string>) => {
    setSubmitting(true)

    await signin(email, password)
      .then(() => router.push("/app/recipes"))
      .catch((err: Error) => {
        setError(err.message)
      })
      .finally(() => setSubmitting(false))
  }

  return (
    <div>
      {error ? <span className="text-sm text-red-500">{error}</span> : null}
      <SimpleForm
        submitLabel={submitting ? <Spinner /> : "Sign in"}
        onSubmit={submit}
        fields={[
          {
            type: "email",
            name: "email",
            placeholder: "Your Email",
            register: { required: "Email is required" },
          },
          {
            type: "password",
            name: "password",
            placeholder: "Your Password",
            register: { required: "Password is required" },
          },
        ]}
      />
      <p className="w-full mt-4 text-sm text-center text-gray-500">
        Don&apos;t have an account yet? Create one in the form above.
      </p>
    </div>
  )
}
