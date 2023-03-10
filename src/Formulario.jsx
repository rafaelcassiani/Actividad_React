import React from "react"
import { useState } from "react";
import MostrarUsuario from "./MostrarUsuario";

function Formulario(props){

  const [nombre, setnombre]=useState("");
  const [apellido, setapellido]=useState("");
  const [estado, setEstado]=useState([]);


    function agregar(e){
        e.preventDefault();
        let usuario = {
            nombre: nombre,
            apellido: apellido
        }
        setEstado([...estado, usuario]);
    }
    function MostrarUsuario(props) {
        if(nombre != setnombre && apellido != setapellido){
            return (
                estado.map(estado=>(
                <p>Su nombre es: {estado.nombre} Y su apellido es: {estado.apellido}</p>
                ))
            ) 
        }else{
            return(
                <p>Usuario Registrado</p>
            )
        }  
      }

    return(
        <>
            <form action="" onSubmit={(e) => agregar(e)}>
                <input onChange={(e) => setnombre(e.target.value)} type="text" className="form-control" id="nombre" name="nombre" placeholder="Digite Nombre"/><br />
                <input onChange={(e) => setapellido(e.target.value)} type="text" className="form-control" id="apellido" name="apellido" placeholder="Digite Apellido"/><br />
                <button className="btn btn-outline-info">Agregar</button><br />
            </form>
            <MostrarUsuario usuario={estado}/>
        </>
    )
}
export default Formulario