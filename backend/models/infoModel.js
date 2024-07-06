import { DataTypes } from "sequelize";
import db from "../database/db.js";


const infoModel = db.define('info',{

  unidad: {type: DataTypes.INTEGER},
  ici: {type: DataTypes.INTEGER},
  ciudad: {type: DataTypes.STRING}
},{
  tableName: 'info', // Nombre exacto de la tabla en la base de datos
})
export default infoModel;