const { Client, Get, Ref, Query, Select, Collection, Format, Update, Function, Match, Index, Var, Casefold, Lambda, Map, Do, If, Exists, Create, Call, Let, ToObject } = require("faunadb")



const client = new Client({ secret: process.env.FAUNADB_SECRET })



const createFood = (name) => {
    name = Casefold(name)
    return Do(
        If(
            Exists(Match(Index("food_by_name"), name)),
            null,
            Create(Collection("foods"), { data: { name } })
        ),
        Get(Match(Index("food_by_name"), name))
    )
}



async function main() {

    const updateRes = await client.query(
        Update(Function("createRecipe"),
            {
                body: Query(Lambda(
                    ["name", "ingredients"],
                    Do(
                        Create(Collection("recipes"), {
                            data: {
                                name: Var("name"),
                                ingredients: Map(Var("ingredients"), Lambda("ingredient",

                                    {
                                        foodRef: Select("ref", createFood(Select("name", Var("ingredient")))),
                                        amount: Select("amount", Var("ingredient"))

                                    }


                                ))
                            }
                        }
                            // Do(

                            //     Map(Var("ingredients"), Lambda("ingredient",
                            //     createFood(Select("name", Var("ingredient"))
                            //     ))),

                            //     )

                        )

                    )))
            }))
        .catch(err => {
            console.error(err)
            process.exit(1)
        })
    console.log({ updateRes })


    const callRes = await client.query(Call(Function("createRecipe"), "first recipe", [{ name: "Tomatoes", amount: 2.4 }, { name: "Onion", amount: 5 }]))
        .catch(err => {
            console.error(err)
            process.exit(1)
        })
    console.log(JSON.stringify(callRes, null, 2))
    process.exit(0)
}


main()