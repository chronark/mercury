import { CreateIndex, Collection } from "faunadb"

export default CreateIndex({
  name: "food_by_name",
  source: Collection("foods"),
  terms: [
    {
      field: ["data", "name"],
    },
  ],
  unique: true,
  serialized: true,
})
