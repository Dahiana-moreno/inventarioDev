import { useEffect, useState } from 'react'

import axios from 'axios'
import './App.css'

function App() {

  const [info, setInfo] = useState([]);
useEffect(() => {
  axios.get(import.meta.env.VITE_URL_BACKEND)
  .then(res => {
    setInfo(res.data)
  })
  .catch(error => {
    console.error('Error al obtener info', error)
  })
}, []);
  return (
    <>
      <div className='App'>
       <button onClick={async () => {
        const res = await fetch(`${import.meta.env.VITE_REACT_APP_URL_BACKEND}/inventory`)
        const data = await res.json()
        console.log(data)
       }}>Users</button> 
      </div>
      <h1>Vite + React</h1>
    <h1>Inventario</h1>
    <ul>
      {info.map(inf=> (
        <li key={inf.id}>
          {inf.unidad} {inf.ici} {inf.ciudad}
        </li>
      ))}
    </ul>
    </>
  )
}

export default App
