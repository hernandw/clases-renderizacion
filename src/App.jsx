import React from 'react'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'
import './App.css'

const App = () => {
  return (
    <div className='container'>
      <Formulario />
      <ListadoPacientes />
    </div>
  )
}

export default App
