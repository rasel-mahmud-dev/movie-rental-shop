 import {ApolloClient, ApolloLink, HttpLink, InMemoryCache} from '@apollo/client';


export const backend = "http://localhost:4000"

const authLink = new ApolloLink((operation, forward)=>{
    operation.setContext(({headers = {}})=>{
        return {
            headers: {
                ...headers,
                token: localStorage.getItem("token")
            }
        }
    })
    return forward(operation)
})

const client = new ApolloClient({
    link: authLink.concat(new HttpLink({
        uri: backend + '/graphql', // Replace with your GraphQL server endpoint
    })),
    cache: new InMemoryCache(),
});

export default client;