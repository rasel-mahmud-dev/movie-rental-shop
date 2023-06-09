const connectDatabase = require("../../helpers/connectDatabase");
const sqlDate = require("../../helpers/sqlDate");
const authMiddleware = require("../../middlewares");


exports.getMovies = async function (parent, payload, context) {
    try{
        let client = await connectDatabase()
        let [result] = await client.query(`select movies.*, u.id as userId, u.firstName, u.role, u.aboutMe, u.gender, u.birthday, u.createdAt, u.updatedAt, u.lastName, u.email, u.avatar  from movies join users u on u.id = movies.id`)

        let mapped = result.map((item)=>{
            const { role, aboutMe, gender, birthday, createdAt,updatedAt,firstName, lastName, email, avatar, ...movie } = item;
            return {
                ...movie,
                seller: {
                    role, aboutMe, gender, birthday, createdAt,updatedAt,firstName, lastName, email, avatar,
                }
            }
        })
        return mapped
    } catch (ex) {
        console.log(ex)
    }
}

exports.getMovie = async function (parent, {id}, context) {
    try{
        let client = await connectDatabase()

        let [result] = await client.query(`select * from movies where id = ?`, [id])
        return result[0]
    } catch (ex) {
        console.log(ex)
    }
}


exports.createMovie = async function (parent, payload, context) {

    try{

        let authInfo = await authMiddleware(context)
        if(!authInfo) return {}

        let client = await connectDatabase()
        const {
            title,
            genres,
            stock,
            price,
            country,
            director,
            casts,
            duration,
            releasedYear,
            summary,
        } = payload.movieInput

        let [result] = await client.execute(`
            insert into movies(title, genres, stock, price, country, director, casts, duration, releasedYear, summary, sellerId)
            values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [title, JSON.stringify(genres), stock, price, country, director, casts, duration, sqlDate(releasedYear), summary, authInfo.id])

        let [ta] = await client.query(`select * from movies where id = ?`, result.insertId)
        return ta[0]

    } catch (ex) {
        console.log(ex)
    }
}