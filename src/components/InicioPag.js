import React, { useEffect, useSate} from "react";
import { Link } from "react-router-dom";

const InicioPag = () => {
  return (
      <>
        <h1>Página de Inicio</h1>
        <p> Bienvenidos</p><br/>
        <div>
          <a href="/perfil">ir a Perfil</a><br/>
          <Link to="/perfil">ir a Perfil</Link>
        </div>
      </>
    
  )
}

export default InicioPag;