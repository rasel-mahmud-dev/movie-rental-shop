const graphql = require("graphql")

const {ApolloServer} = require("apollo-server")
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

server.listen(4000).then(({url}) => {
    console.log(url)
})

connectDatabase().then((connection) => {
    // console.log(connection)
}).catch(ex => {
    console.log(ex)
})