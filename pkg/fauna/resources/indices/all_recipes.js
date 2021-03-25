import { CreateIndex, Collection } from "faunadb"

export default CreateIndex({
  name: "all_recipes",
  source: Collection("foods"),
  terms: [
    {
      field: ["data", "name"],
    },
  ],
  unique: true,
  serialized: true,
})
