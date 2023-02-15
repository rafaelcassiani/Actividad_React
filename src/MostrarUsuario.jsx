import React from 'react'
import { useState } from 'react'
import Formulario from './Formulario'
import estado from './Formulario'

function MostrarUsuario(props) {
  if(nombre != setnombre && apellido != setapellido){
    return (
        estado.map(estado=>(
        <p>Su nombre es: {estado.nombre} Y su apellido es: {estado.apellido}</p>
        ))
    ) 
}else{
    return(
        <p></p>
    )
}  
}

export default MostrarUsuario