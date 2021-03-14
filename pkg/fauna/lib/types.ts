export interface Recipe {
  name: string
  ingredients: Ingredient[]
}

export interface Ingredient {
  food: Food
  amount: number
  unit: Unit
}

export enum Unit {
  g,
  kg,
  pieces,
}
export interface Food {
  name: string
}
