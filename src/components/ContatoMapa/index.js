import React from "react";
import "./ContatoMapa.css";

import dentista01 from "../../assets/dentista01.jpg";
import dentista02 from "../../assets/dentista02.jpg";
import dentista03 from "../../assets/dentista03.jpg";

export default function ContatoMapa() {
    const dentistas = [
        { foto: dentista01, 
          nome: "Dra Ana Paula", 
          horario: "Segunda a Sexta: 8h a 14h" 
        },
        { foto: dentista02, 
          nome: "Dra Maristela", 
          horario: "Terça a Quinta: 10h - 18h" 
        },
        { foto: dentista03, 
          nome: "Dra Maria Fernanda", 
          horario: "Segunda, Quarta e Sexta: 13h as 19h" },
    ];

    return (
        <section className="contato-mapa">
            <h2>Horario de Atendimento</h2>

            <div className="dentistas-container">
                {dentistas.map((dentista, index) => (
                    <div className="dentista" key={index}>
                        <img src={dentista.foto} alt={dentista.nome} />
                        <h3>{dentista.nome}</h3>
                        <p>{dentista.horario}</p>
                    </div>
                ))}
            </div>   

            <div className="mapa">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29236.77512152577!2d-46.728518699999995!3d-23.65460325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1742491810427!5m2!1spt-BR!2sbr" 
            width="600" 
            height="450" 
            style={{border:0}}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            title="Mapa Clinica">
            </iframe>
            </div> 

            <div className="telefones">
                <h3>Telefones</h3>
                <p>Telefones: (11) 1234-5678</p>
                <p>Whatsapp:  (11) 8765-4321</p>

            </div>
        </section>
    );
}