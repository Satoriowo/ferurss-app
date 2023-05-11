import React from "react";
import Portada from "../../imagenes/slider1.png";
import { Link } from "react-router-dom";
export const Inicio =() =>{
    return ( 
        <div className="inicio">
            <img src={Portada} alt="inicio"/>
            <h1>¿Quienes somos?</h1>
            <p>Somos una ferreteria inovadora, que busca satisfacer las necesidades de los clientes
                con los mejores proovedores y calidad de punta es por ello que creamos la pagina para ustedes.
            </p>
            <p>Nuestro sercivio destaca entre otras, por la simplicidad de todo lo que conlleva hacer un pedido y garantia del servicio</p>
        </div>
    )
}