import { Sequelize } from "sequelize";
import * as dotenv from "dotenv"

dotenv.config()

const sequelize = new Sequelize(
    process.env.BD_NAME,
    
    process.env.BD_USER,
    process.env.BD_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.BD_HOST,
        port: process.env.BD_PORT
    }

)

export default sequelize;