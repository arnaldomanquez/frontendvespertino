import React, { useEffect, useState} from "react";
import {Link} from "react-router-dom"
const PerfilPag = () => {

  //Contador de Likes numerico
  const [contadorLikes,setContadorLikes] = useState(0)
  //Contador de Nombres
  //const [nombre,setNombre] = useState ("")
  // contador buleano
  //const [activo,setActivo] = useState (false)
  //Como se Lee un estado? console.log(contadorLikes)
  //como se cambia el valor de un estado? setContadorLikes(12)
  const handleContador = () => {
    setContadorLikes(contadorLikes+1)
  }

  return (
    <>
        <h1>Página de Perfil</h1>
        <p> Hasta Pronto</p>
        <div>
        <Link to="/">ir a Inicio</Link>
        </div><br/>
        <button type="button" onClick={handleContador}> Dar un Like </button>
        <p>Conteo de Likes : {contadorLikes}</p>
        <div>
          <p>indique el nombre del Usuario</p>


        </div>

    </>
  )
}

export default PerfilPag;