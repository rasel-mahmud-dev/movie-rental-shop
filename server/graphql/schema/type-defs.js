const {gql} = require("apollo-server")

const typeDefs =  gql`

    scalar GraphQLDateTime
    
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        password: String!
        createdAt: GraphQLDateTime
        updatedAt: GraphQLDateTime
        role: String!
        email: String!
        aboutMe: String
        gender: String
        birthday: String
        avatar: String
        favoriteMovies: [Movie]
    }

    type Movie {
        id: Int
        title: String
        thumb: String
        price: Int
        author: String
        genres: [String]
        stock: Int
        country: String
        director: String
        casts: String
        duration: Int
        releasedYear: GraphQLDateTime
        summary: String
        images: [String]
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
        genres: [String]
        stock: Int
        price: Int
        country: String
        director: String
        casts: String
        duration: Int
        releasedYear: GraphQLDateTime
        summary: String
    }
    
    type Mutation {
        createMovie(movieInput: NewMovieInput): Movie
        createUser(userInput: NewUserInput): RegistrationResponse
        loginUser(userInput: LoginUserInput): RegistrationResponse
        bookMovie(eventId: ID!): Movie!
    }

    type Query {
        users: [User]
        user(id: ID!): User
        authVerify: RegistrationResponse
        getHomeSliderMovies: Movie
        getMovies: [Movie]
        getMovie(id: String!): Movie
    }

    schema {
        query: Query
        mutation: Mutation
    }
    
`
module.exports = typeDefs