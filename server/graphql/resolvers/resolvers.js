const {createUser, loginUser, authVerify} = require("./auth");


const users = [
    {
        id: 123,
        firstName: "Rasel Mahmud",
        email: "rasel@gmail.com",
        avatar: "http://imgbb/asdfasdifu.png"
    },{
        id: 234,
        firstName: "Alex Mahmud",
        email: "alex@gmail.com",
        avatar: "http://imgbb/asdfasdifu.png"
    },
    {
        id: 3242,
        firstName: "July Mahmud",
        email: "july@gmail.com",
        avatar: "http://imgbb/asdfasdifu.png"
    }

]

const resolvers ={
    Query: {
        authVerify: authVerify,
        users(){
            return users
        },
        user(_, args){
            let userId = Number(args.id)
            let user = users.find(u=>u.id === userId)
            console.log(user)
            return user
        }
    },
    Mutation: {
        // registerUser: (parent, { input }) => {
        //     const { name, email, password } = input;
        //
        //     // Generate a new user ID
        //     const id = String(users.length + 1);
        //
        //     // Create a new user object
        //     const user = {
        //         id,
        //         name,
        //         email,
        //         password,
        //         createdAt: new Date().toISOString(),
        //         updatedAt: new Date().toISOString(),
        //     };
        //
        //     // Store the user in the data store
        //     users.push(user);
        //
        //     return user;
        // },

        createUser: createUser,
        loginUser: loginUser,


        createMovie: (parent, { input }) => {
        },

        bookMovie: (parent, { input }) => {
        }
    },

}

module.exports = resolvers