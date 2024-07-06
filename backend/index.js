import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import db from './database/db.js';
import infoModel from './models/infoModel.js';

dotenv.config()

const app = express()

const PORT = process.env.PORT
const URIFRONT = process.env.URI_FRONT

app.use(cors({
  origin: URIFRONT
}))
console.log(URIFRONT)
app.get('/inventory', async (req, res) => {
  try {
    const info = await infoModel.findAll();
    res.json(info)
    
  } catch (error) {
    console.log('Error al obtener info', error)
  }
  
  /*res.send({
    users: []
  }); */
});
console.log(infoModel)
try {
  await db.authenticate()
  console.log('Conexion exitosa a la db')
} catch (error) {
  console.log(`Error en la conexion a la db ${error}`)
}


app.listen(PORT, () => {
  console.log(`server init on port ${PORT}`)
})