import { CreateRole, Collection, Query, Lambda, Equals, CurrentIdentity, Var } from "faunadb"

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
        create: true,
      },
    },
  ],
})
