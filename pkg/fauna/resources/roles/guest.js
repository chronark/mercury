import { CreateRole } from "faunadb"

export default CreateRole({
  name: "Guest",
  membership: {},
  privileges: [],
})
