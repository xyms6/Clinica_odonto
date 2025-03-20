import React from "react";
import "./Depoimento.css";

export default function Depoimento( { nome, foto, texto } ) {
    return (
        <div className="depoimento">
            <img src={foto} alt={nome} />
            <h3>{nome}</h3>
            <p>{texto}</p>            
        </div>
    );
}