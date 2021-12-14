const express = require("express");
const { ApolloServer} = require("apollo-server-express");
const { typeDefs } = require("./Schema/TypeDefs");
const { resolvers } = require("./Schema/Resolvers");


async function startApolloServer(typeDefs, resolvers){
const server = new ApolloServer({ typeDefs, resolvers })
const app = express()
await server.start();
server.applyMiddleware({ app })

app.listen({ port: 4000 }, () => {
    console.log("🚀 Server ready at port 4000")
});
}

startApolloServer(typeDefs, resolvers);
