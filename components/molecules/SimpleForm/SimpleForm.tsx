import React from "react"
import { Input } from "../../atoms/Input/Input"
import { Primary } from "../../atoms/button/Primary/Primary"
import { useForm, RegisterOptions } from "react-hook-form"

interface Field {
  type: string
  name: string
  placeholder: string
  register: RegisterOptions
}

interface SimpleFormProps {
  fields: Field[]
  submitLabel: string | React.ReactNode
  onSubmit: (fields: Record<string, string | number>) => Promise<void>
}

export const SimpleForm: React.FC<SimpleFormProps> = ({ fields, submitLabel, onSubmit }): JSX.Element => {
  const { register, handleSubmit, errors } = useForm()
  console.log(errors)
  return (
    <form className="relative w-full mt-10 space-y-8">
      {fields.map((field) => {
        return (
          <div key={field.name}>
            <Input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              register={register(field.register)}
            />
            <span className="text-sm text-red-700">{errors[field.name] ? `${field.name} is required` : null}</span>
          </div>
        )
      })}
      <Primary onClick={handleSubmit(onSubmit)} label={submitLabel} highlighted />
    </form>
  )
}
