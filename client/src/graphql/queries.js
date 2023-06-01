import {gql} from "graphql-tag";

export const LOGIN_USER = gql`
    mutation LoginUser($userInput: LoginUserInput!) {
        loginUser(userInput: $userInput) {
            id
            firstName
            lastName
            role
            email
            avatar
            token
        }
    }
`;

export const AUTH_FETCHING = gql`
    query GetUser {
        authVerify{
            id
            firstName
            lastName
            role
            email
            avatar
            token
        }
    }
`;


const GET_MOVIES = gql`
    query GetMovies {
        users {
            id
            name
            email
        }
    }
`;


function login(payload){

}