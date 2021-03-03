import React from "react"

export interface InputProps {
  type: string
  name: string
  placeholder: string
  register: () => void
}

export const Input: React.FC<InputProps> = ({ type, name, placeholder, register }) => (
  <input
    type={type}
    name={name}
    className="block w-full px-4 py-3 border-2 border-gray-200 rounded focus:border-transparent focus:ring focus:ring-blue-700 focus:outline-none"
    placeholder={placeholder}
    ref={register}
  />
)

export default Input
