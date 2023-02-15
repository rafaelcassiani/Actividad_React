import React from 'react'
import { useState } from 'react'
import Formulario from './Formulario'
import estado from './Formulario'

function MostrarUsuario(props) {
  const state = {estado}
  return (
    <div>
    {/* {state.map((est) => {
      return(
        <p>Su nombre es {est.nombre} y su apellido es {est.apellido} </p>
      )
    })} */}
    </div>
  )
}

export default MostrarUsuario