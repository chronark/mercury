import { Ingredient, Recipe, Food, User } from "./types"
import { authClient } from "./client"
import { useMutation, useQuery } from "react-query"
import {
  Client,
  Call,
  Get,
  Query,
  Paginate,
  Documents,
  Select,
  Collection,
  Function,
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
} from "faunadb"

export interface Queries {
  getRecipes: () => Promise<Recipe[]>
}

export interface Mutations {
  createRecipe: (recipe: Recipe) => Promise<string>
}

export const Fauna = () => {
  const client = new Client({ secret: "fnAEEMZuhZACBR1NRWjFLEwkxydC4HawQNloFrRj" })

  return {
    getRecipes: async (): Promise<Recipe[]> => {
      return (await client.query<Recipe[]>(
        Select(
          "data",
          Map(Paginate(Documents(Collection("recipes"))), Lambda(["recipe"], Select("data", Get(Var("recipe"))))),
        ),
      )) as Recipe[]
    },
    createRecipe: async (recipe: Recipe): Promise<string> => {
      const res = await client.query(Call(Function("createRecipe"), recipe))
      console.log({ res })
      return ""
    },
  }
}
