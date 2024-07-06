import { Sequelize } from "sequelize";
import dotenv from "dotenv"

dotenv.config()
const NAME = process.env.DB_DATABASE
const USER = process.env.DB_USER
const PASSWORD = process.env.DB_PASSWORD
const HOST = process.env.DB_HOST

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