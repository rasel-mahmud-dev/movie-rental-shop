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


export const GET_MOVIES = gql`
    query {
        getMovies {
            id
            title
            price
            summary
            releasedYear
            genres
            images
        }
    }
`;

export const GET_MOVIE = gql`
    query GET_MOVIE($movieId: String!) {
        getMovie(id: $movieId) {
            id
            title
            price
            summary
            releasedYear
            genres
            images
        }
    }
`;


export const GET_HOME_SLIDER_MOVIES = gql`
    query {
        getHomeSliderMovies {
            title
            thumb
        }
    }
`;


function login(payload){

}


export const CREATE_MOVIE = gql`
    mutation CreateMovie($movieInput: NewMovieInput!) {
        createMovie(movieInput: $movieInput) {
            title
        }
    }

`