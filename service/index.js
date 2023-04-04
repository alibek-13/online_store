import * as dotenv from "dotenv"
import express from "express";
import sequelize from "./bd.js"
import model from './model/model.js'
import cors from "cors";
import router from "./router/index.js";
dotenv.config()
const PORT = process.env.PORT || 7000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router) 


app.get("/" , (req, res)=> {
    res.status()
} )


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        
        app.listen(PORT, () => console.log(`server run ${PORT}...`))
    } catch (e) {
        console.log(e)
    }
}


start()