import React, { useEffect, useState} from "react";
//import {Link} from "react-router-dom"
const Usuario = () => {
    const [nameUser,setNameUser] = useState("")
    const [terminoCont,setTerminoCont] = useState(false)

    const handleUser = (evento) => {
        //donde esta en el evento lo que viene escrito?
        //por el Usuario desde el Input de Texto?
        //evento.target,value
        setNameUser(evento.target.value)

    } 
    const handleTerminos = () => {
        setTerminoCont(!terminoCont)
    }

    return(
        <>
        <h1>Usuario</h1>
        <label>Indique un Nombre de Usuario</label><br/><br/>
        <input type="text" name="usuario" placeholder="Por Ejemplo : Santiago" onChange={handleUser}/><br/><br/>
        {
            nameUser=="nombreError" &&
                <p>YA EXISTE ESE USUARIO</p>
        }<br/>
        <input type="checkbox" name="terminos" checked ={terminoCont} onChange={handleTerminos} />
        <label htmlFor="terminos">Aceptos los Terminos de Contrato</label><br/><br/>
        <button type="button">Guardar nombre de Usuario</button> 
        
        </>
    )
}

export default Usuario