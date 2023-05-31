const {gql} = require("apollo-server")


const typeDefs =  gql`
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
        createdAt: String!
        updatedAt: String!
        firstName: String
        email: String
        avatar: String
        favoriteMovies: [Movie]
    }

    type Movie {
        title: String
        price: Int
        releaseYear: Int
        author: String
    }

    type Author {
        id: String

    }

    input UserInput {
        email: String
        password: String
    }

    input NewUserInput {
        firstName: String
        lastName: String
        email: String
        password: String
    }

    input NewMovieInput {
        title: String
        price: Int
        releaseYear: Int
    }

    type RootMutation {
        createMovie(eventInput: NewMovieInput) : Movie
        createUser(userInput: NewUserInput): User
        bookMovie(eventId: ID!): Movie!
    }

    type Query {
        users: [User]
        user(id: ID!): User
    }

    schema {
        query: Query
        mutation: RootMutation
    }
    
`

module.exports = typeDefs