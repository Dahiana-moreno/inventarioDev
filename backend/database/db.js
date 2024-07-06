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
    dialect: 'mysql'
  }
)
export default db;