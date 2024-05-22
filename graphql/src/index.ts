import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
const typeDefs = `
  type Book {
    id: ID!
    title: String!
    published_year: Int!
    author: Author
  }
  type Author {
    id: ID!
    name: String!
    books: [Book]
  }
  type Query {
    books: [Book]
    authors: [Author]
  }
  type Mutation {
    addBook(title: String!, published_year: Int!, authorid: ID!): Book
  }`;

const books = [
  {
    id: 1,
    title: "Book1",
    published_year: 1990,
    authorid: 1,
  },
  {
    id: 2,
    title: "Book2",
    published_year: 1990,
    authorid: 1,
  },
  {
    id: 3,
    title: "Book3",
    published_year: 1990,
    authorid: 2,
  },
  {
    id: 4,
    title: "Book4",
    published_year: 1990,
    authorid: 2,
  },
];

const authors = [
  {
    id: 1,
    name: "Author1",
    books: [1, 2],
  },
  {
    id: 2,
    name: "Author2",
    books: [3, 4],
  },
];

const resolvers = {
  Book: {
    author: (parent: (typeof books)[0]) => {
      return authors.find((author) => author.id === parent.authorid);
    },
  },
  Author: {
    books: (parent: (typeof authors)[0]) => {
      return parent.books.map((id) => {
        return books.find((book) => book.id === id);
      });
    },
  },
  Query: {
    books: () => {
      return books;
    },
    authors: () => {
      return authors;
    },
  },
  Mutation: {
    addBook: (parent: any, args: any) => {
      const authorid = parseInt(args.authorid);
      authors.forEach((e) => {
        if (e.id === authorid) {
          e.books.push(books.length + 1);
        }
      });
      const book = {
        id: books.length + 1,
        title: args.title,
        published_year: args.published_year,
        authorid: authorid,
      };
      books.push(book);
      return book;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
