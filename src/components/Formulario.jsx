import React from 'react'

const Formulario = () => {
  return (
    <div className='formulario'>
      <h2>Ingreso de pacientes</h2>

      <form>
        <div className="form__datos">
          <label htmlFor="name">Nombre:</label>
          <input type="text" placeholder='agrega paciente'/>
        </div>
      </form>
    </div>
  )
}

export default Formulario
