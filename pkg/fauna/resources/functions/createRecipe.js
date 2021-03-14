import {
  Get,
  Query,
  Select,
  Collection,
  Role,
  CreateFunction,
  Match,
  Index,
  Var,
  Casefold,
  Lambda,
  Map,
  Do,
  If,
  Exists,
  Create,
  Let,
} from "faunadb"

const createFoodQuery = (name) => {
  return Create(Collection("foods"), {
    data: {
      name,
    },
  })
}
const createFoodIfNotExistQuery = (name) => {
  return Let(
    {
      food: Match(Index("food_by_name"), name),
    },
    Do(If(Exists(Var("food")), null, createFoodQuery(name)), Get(Var("food"))),
  )
}

const createIngredientsQuery = (ingredients) =>
  Map(
    ingredients,
    Lambda("ingredient", {
      foodRef: Select("ref", createFoodIfNotExistQuery(Select(["food", "name"], Var("ingredient")))),
      amount: Select("amount", Var("ingredient")),
      unit: Select("unit", Var("ingredient")),
    }),
  )

const createRecipeQuery = (recipe) => {
  return Create(Collection("recipes"), {
    data: {
      name: Select("name", recipe),
      ingredients: createIngredientsQuery(Select("ingredients", recipe)),
    },
  })
}
export default CreateFunction({
  name: "createRecipe",
  role: Role("authenticatedUser"),
  body: Query(Lambda(["recipe"], createRecipeQuery(Var("recipe"))))
})
