import { recipeModel } from "./schema.js"
export const resolvers = {
    Query: {
       async recipe(_,args)
       {
        return await recipeModel.findById(args.ID)
       },
       async getRecipes()
       {
        return await recipeModel.find({})
       }
    },
    Mutation:{
          async createRecipe(_,{recipeinput:{name,description}})
          {
              const recipe = new recipeModel({
                name:name,
                description:description,
                likes:0,
                dislikes:0
              })
              const res = await recipe.save()
              return res
          }
    }
}
