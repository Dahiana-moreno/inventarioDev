import { Sequelize } from "sequelize";
import dotenv from "dotenv"

dotenv.config()
const NAME = process.env.MYSQLDATABASE
const USER = process.env.MYSQLUSER
const PASSWORD = process.env.MYSQLPASSWORD
const HOST = process.env.MYSQLHOST

const db = new Sequelize (
  NAME,
  USER,
  PASSWORD,
  {
    host: HOST,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 60000, // aumenta el tiempo de espera de adquisición
      idle: 10000
    },
    dialectOptions: {
      connectTimeout: 60000 // aumenta el tiempo de espera de conexión
    }
  }
)
export default db;