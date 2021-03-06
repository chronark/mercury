import { CreateRole, Collection, Function, Query, Lambda, Equals, CurrentIdentity, Var, Index } from "faunadb"

export default CreateRole({
  name: "authenticatedUser",
  membership: {
    resource: Collection("users"),
  },
  privileges: [
    {
      resource: Collection("users"),
      actions: {
        read: Query(Lambda("userRef", Equals(CurrentIdentity(), Var("userRef")))),
      },
    },
    {
      resource: Collection("recipes"),
      actions: {
        read: true,
        write: true,

        create: true,
      },
    },
    {
      resource: Collection("foods"),
      actions: {
        read: true,
        write: true,
        create: true,
      },
    },
    {
      resource: Function("createRecipe"),
      actions: { call: true },
    },
    {
      resource: Index("food_by_name"),
      actions: { read: true },
    },
    {
      resource: Index("all_recipes"),
      actions: { read: true },
    },
    {
      resource: Index("user_by_email"),
      actions: { read: true },
    },
  ],
})
