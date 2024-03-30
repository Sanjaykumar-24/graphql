import { model,Schema } from "mongoose"
const recipeSchema = new Schema({
  name:String,
  description:String,
  likes:Number,
  dislikes:Number
})
export const recipeModel = model('recipe',recipeSchema)
export const typeDefs = `
  type Recipe {
    name:String!
    description: String!
    likes: Int!
    dislikes: Int!
  }

  input RecipeInput {
    name:String!
    description:String!
  }

  type Mutation{
    createRecipe(recipeinput:RecipeInput):Recipe!
  }

  type Query{
    recipe(ID:ID!):Recipe
    getRecipes:[Recipe]!
  }
`;