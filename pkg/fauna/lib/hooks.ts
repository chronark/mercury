import { Fauna } from "./api"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { Ingredient, Recipe, Food } from "./types"

export function useFauna(secret: string) {
  const fauna = Fauna()
  const queryClient = useQueryClient()

  return {
    getRecipes: () => useQuery("getRecipes", fauna.getRecipes),
    createRecipe: useMutation((recipe: Recipe) => fauna.createRecipe(recipe), {
      onSuccess: () => {
        queryClient.invalidateQueries("getRecipes")
      },
    }).mutate,
  }
}
