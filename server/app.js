const graphql = require("graphql")

const express = require("express")
const cors = require("cors")

const {ApolloServer} = require("apollo-server-express")
// const {ApolloServer} = require("apollo-server")
const typeDefs = require("./graphql/schema/type-defs");
const resolvers = require("./graphql/resolvers/resolvers");
const {connect} = require("mongoose");
const connectDatabase = require("./helpers/connectDatabase");


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => {
        const token = req.headers.token || ""
        return {token}
    }
})


// connect(
//         `mongodb://127.0.0.1:21717?retryWrites=true`
//     )
//     .then(() => {
//         server.listen(4000).then(({url})=>{
//             console.log(url)
//         })
//     })
//     .catch(err => {
//         console.log(err);
//     });
//
// Create an instance of Express
const app = express();

app.use(cors())


// Serve static files from the "public" directory
app.use(express.static('public'));


server.start().then(()=>{
    // Apply Apollo Server middleware to Express
    server.applyMiddleware({ app });

    // Start the server
    app.listen(4000, ()=>{
        console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
    })

})


connectDatabase().then((connection) => {
    // console.log(connection)
}).catch(ex => {
    console.log(ex)
})