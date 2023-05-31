
const bcrypt = require('bcryptjs');
const connectDatabase = require("../../helpers/connectDatabase");


module.exports = {
    createUser: async (args) => {
        try {
            const connection = await connectDatabase()
            let [user] = await connection.query(`select firstName from users`)
            console.log(user)

            // const existingUser = await User.findOne({ email: args.userInput.email });
            // if (existingUser) {
            //     throw new Error('User exists already.');
            // }
            // const hashedPassword = await bcrypt.hash(args.userInput.password, 12);
            //
            // const user = new User({
            //     email: args.userInput.email,
            //     password: hashedPassword
            // });
            //
            // const result = await user.save();
            //
            // return { ...result._doc, password: null, _id: result.id };
        } catch (err) {
            throw err;
        }
    }
};