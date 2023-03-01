import React, { useState } from 'react'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'
import './App.css'

const App = () => {
  const [pacientes, setPacientes] = useState([])
  console.log([...pacientes, name])
  return (
    <div className='container'>
      <Formulario pacientes={pacientes} setPacientes={setPacientes} />
      <ListadoPacientes />
    </div>
  )
}

export default App
