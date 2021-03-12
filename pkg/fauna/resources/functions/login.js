import {
  If,
  Do,
  Exists,
  CreateFunction,
  Var,
  Collection,
  Lambda,
  Query,
  Create,
  Match,
  Index,
  Casefold,
  Login,
} from "faunadb"

const userByEmail = Match(Index("user_by_email"), Casefold(Var("email")))

export default CreateFunction({
  name: "login",
  body: Query(
    Lambda(
      ["email", "password"],
      Do(
        If(
          Exists(userByEmail),
          null,
          Create(Collection("users"), {
            credentials: { password: Var("password") },
            data: { email: Casefold(Var("email")) },
          }),
        ),
        Login(userByEmail, { password: Var("password") }),
      ),
    ),
  ),
})
