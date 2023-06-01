const {gql} = require("apollo-server")


const typeDefs =  gql`
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        password: String!
        createdAt: String!
        updatedAt: String!
        role: String!
        email: String!
        aboutMe: String
        gender: String
        birthday: String
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
        aboutMe: String
        gender: String
        birthday: String
        avatar: String
    }
    
    input LoginUserInput {
        email: String
        password: String
    }
    
    type RegistrationResponse {
        id: Int
        firstName: String 
        lastName: String
        role: String
        email: String
        avatar: String
        token: String
    }

    input NewMovieInput {
        title: String
        price: Int
        releaseYear: Int
    }
    
    type Mutation {
        createMovie(eventInput: NewMovieInput): Movie
        createUser(userInput: NewUserInput): RegistrationResponse
        loginUser(userInput: LoginUserInput): RegistrationResponse
        bookMovie(eventId: ID!): Movie!
    }

    type Query {
        users: [User]
        user(id: ID!): User
        authVerify: RegistrationResponse
    }

    schema {
        query: Query
        mutation: Mutation
    }
    
`
module.exports = typeDefs