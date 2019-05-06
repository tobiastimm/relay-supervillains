const { ApolloServer } = require('apollo-server')
const { importSchema } = require('graphql-import')
const Query = require('./resolvers/Query')

const server = new ApolloServer({
  typeDefs: importSchema('./src/schema.graphql'),
  resolvers: {
    Query,
  },
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
