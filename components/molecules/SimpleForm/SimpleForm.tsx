import React from "react"
import { Input } from "../../atoms/Input/Input"
import { Button } from "../../molecules/clickable/Button"
import { useForm, RegisterOptions } from "react-hook-form"
import { Link } from "../clickable/Link"

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
            <span className="text-sm text-red-700">{errors[field.name]?.message}</span>
          </div>
        )
      })}
       <div className="w-full">
    <Link type="cta" href="" label="Choose plan" size="auto"/>
    </div>
    </form>
  )
}
