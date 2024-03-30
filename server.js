import { ApolloServer } from '@apollo/server'
import {startStandaloneServer} from '@apollo/server/standalone'
import { typeDefs} from './schema.js'
import { resolvers } from './resolvers.js'
import dotenv from 'dotenv'
dotenv.config();
import  mongoose  from 'mongoose'
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('connected to mongoDB')
}).catch((err)=>{
    console.log('connection error',err)
})
const server = new ApolloServer({
 typeDefs,
 resolvers
})
const {url} = await startStandaloneServer(server,{
    listen:{port:process.env.port}
})
console.log('server started at',url)