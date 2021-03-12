import { CreateIndex, Collection } from "faunadb"

export default CreateIndex({
  name: "user_by_email",
  source: Collection("users"),
  terms: [
    {
      field: ["data", "email"],
    },
  ],
  unique: true,
  serialized: true,
})
