import { Sequelize } from "sequelize";
import dotenv from "dotenv"

dotenv.config()
const NAME = process.env.DB_NAME
const USER = process.env.DB_USER
const PASSWORD = process.env.DB_PASSWORD
const HOST = process.env.DB_HOST

const db = new Sequelize (
  NAME,
  USER,
  PASSWORD,
  {
    host: HOST,
    dialect: 'mysql'
  }
)
export default db;