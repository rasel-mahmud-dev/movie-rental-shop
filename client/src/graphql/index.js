 import {ApolloClient, ApolloLink, HttpLink, InMemoryCache} from '@apollo/client';

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
        uri: 'http://localhost:4000', // Replace with your GraphQL server endpoint
    })),
    cache: new InMemoryCache(),
});

export default client;