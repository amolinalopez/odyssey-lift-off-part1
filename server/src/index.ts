const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { addMocksToSchema } = require("@graphql-tools/mock");
const {makeExecutableSchema} = require("graphql-tools/schema");
const schema = require("./schema");

// Demarrer le serveur
async function startApolloServer() {
  // create a new ApolloServer instance, passing the schema def
  const server = new ApolloServer({ typeDefs: schema });
  // start the server
  const { url } = await startStandaloneServer(server);
  console.log(`
      👑  Server is running !
      ✨  Query at ${url}
    `);
}

startApolloServer();

/*
ce script crée un serveur GraphQL qui utilise le schéma défini, puis démarre le serveur. 
Une fois que le serveur est opérationnel => affiche message  
et fournit l'URL à laquelle vous pouvez envoyer des requêtes GraphQL
*/
