import React, { useState } from "react";

const Formulario = ({pacientes, setPacientes}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = e =>{
    e.preventDefault()
    setPacientes([...pacientes, name])
  }
  return (
    <div className="formulario">
      <h2>Ingreso de pacientes</h2>

      <form onSubmit={handleSubmit}>
        <div className="form__datos">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            placeholder="agrega paciente"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form__datos">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="agrega email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <button className="button">Agregar Paciente</button>
      </form>
    </div>
  );
};

export default Formulario;
