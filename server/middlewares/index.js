const jwt = require("jsonwebtoken")

const JWT_SECRET  = "SOME_SUPER_SECRET"


function authMiddleware(context){
    return new Promise((resolve)=>{
        try{
            let tokenData = jwt.decode(context.token, JWT_SECRET)
            if(!tokenData){
                resolve(null)
            }else {
                resolve(tokenData)
            }
        } catch (ex){
            resolve(null)
        }
    })

}

module.exports = authMiddleware