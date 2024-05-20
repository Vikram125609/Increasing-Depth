import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
const typeDefs = `
  type Book {
    id: ID!
    title: String!
    published_year: Int
  }
  type Author {
    id: ID!
    name: String!
  }
  type Query {
    books: [Book]
    authors: [Author]
  }`;

const resolvers = {
  Query: {
    books: () => {
      return [
        {
          id: 1,
          title: "The Awakening",
          published_year: 1990,
        },
      ];
    },
    authors: () => {
      return [
        {
          id: 1,
          name: "Kate Chopin",
        },
      ];
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
