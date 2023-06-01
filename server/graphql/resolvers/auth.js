const bcrypt = require('bcryptjs');
const connectDatabase = require("../../helpers/connectDatabase");
const sqlDate = require("../../helpers/sqlDate");
const jwt = require("jsonwebtoken")


const JWT_SECRET = "SOME_SUPER_SECRET"

module.exports = {
    createUser: async (parent, {userInput}) => {

        try {
            const connection = await connectDatabase()
            let [user] = await connection.query(`select email from users where email = ?`, [userInput.email])
            console.log(user)

            try {
                let [a] = await connection.execute(`
                insert into users(firstName, lastName, email, password, aboutMe, gender, birthday) Values(?, ?, ?, ?, ?, ?, ?)`,
                    [userInput.firstName, userInput.lastName, userInput.email, userInput.password, userInput.aboutMe, userInput.gender, sqlDate(userInput.birthday)])

                if (a.insertId) {
                    let token = jwt.sign({
                        email: userInput.email,
                        role: "customer",
                        id: a.insertId,
                    }, "SOME_SUPER_SECRET", {
                        expiresIn: "1h"
                    })

                    return {
                        ...userInput,
                        id: a.insertId,
                        token
                    };

                }

            } catch (e) {
                console.log(e)
            }
        } catch (err) {
            throw err;
        }
    },

    loginUser: async (parent, {userInput}) => {

        try {
            const connection = await connectDatabase()
            let [data] = await connection.query(`select id, firstName, lastName, role, email, avatar from users where email = ?`, [userInput.email])
            if (!data[0]) {
                // handle error user not registered
                return
            }

            let token = jwt.sign({
                email: data[0].email,
                id: data[0].id,
                role: data[0].role,
            }, JWT_SECRET, {
                expiresIn: "1h"
            })

            return {
                ...data[0],
                token
            };

        } catch (err) {
            throw err;
        }
    },

    authVerify: async (parent, _, context) => {

        try {

            let tokenData = jwt.decode(context.token, JWT_SECRET)
            if (!tokenData) {
                return {}
            }

            const connection = await connectDatabase()
            let [data] = await connection.query(`select id, firstName, lastName, role, email, avatar from users where email = ?`, [tokenData.email])
            if (!data[0]) {
                // handle error user not registered
                return
            }

            return data[0]

        } catch (err) {
            throw err;
        }
    }
};