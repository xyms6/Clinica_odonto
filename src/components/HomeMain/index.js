import React from "react";
import { useState } from "react";
import Depoimento from "../Depoimento";
import "./HomeMain.css";

// Importar as imagens para nossos serviços
import img1 from "../../assets/dente.jpg";
import img2 from "../../assets/dente.jpg";
import img3 from "../../assets/dente.jpg";
import img4 from "../../assets/dente.jpg";

// vamos importar as imagens do clientes
import cliente1 from "../../assets/cliente001.jpg";
import cliente2 from "../../assets/cliente002.jpg";
import cliente3 from "../../assets/cliente003.jpg";

// vamos importar a imagem do aparelho ortodontico
import aparelho from "../../assets/aparelho.jpg";

export default function HomeMain() {
    const [mostrarMensagem, setMostrar] = useState(false);

    const serviços = [
        { nome: 'Clareamento Dental', imagem: img1 },
        { nome: 'Implante Dentarios', imagem: img2 },
        { nome: 'Aparelhos Dentarios', imagem: img3 },
        { nome: 'Tratamento de Canal', imagem: img4 },
    ];

    const depoimentos = [
        { nome: 'Maria Silva', 
          foto: cliente1, 
          texto: 'O tratamento ordontológico transformou meu sorriso e melhorou a minha saúde bucal.' },
        { nome: 'João Pedro', 
          foto: cliente2, 
          texto: 'Atendimento exelente e profissional muito capacitados. Estou muito satisfeito.' },
        { nome: 'Ana Oliveira', 
          foto: cliente3,
          texto: 'A clinica é moderna e o ambiente é muito agradavel, Resultado foi incrivel' },
    ];

    const handleClick = () => {
        setMostrar(true);
    };

    return (
        <main className="home-main">
            <section className="servicos">
                <h2>Nossos Serviços</h2>
                <div className="servicos-grid">
                    {serviços.map((servico, index) => (
                        <div key={index} className="servico-item">
                            <img src={servico.imagem} alt={servico.nome} />
                            <h3>{servico.nome}</h3>
                        </div>    
                    ))}
                </div>
            </section>

            <section className="aparelho">
                <h2>Por que usar Aparelho Ortodontico?</h2>
                <img src={aparelho} alt="Aparelho Ortodôntico" />
                <p>O aparelho ordontontico corrige o posicionamento dos dentes, melhora a mordida
                    facilitar a higiene bucal e melhora a estetica do sorriso.
                </p>
            </section>

            <section className="depoimentos">
                <h2>Depoimentos</h2>
                <div className="depoimentos-grid">
                    {depoimentos.map((depoimento, index) => (
                        <Depoimento
                            key={index}
                            nome={depoimento.nome}
                            foto={depoimento.foto}
                            texto={depoimento.texto}
                        />
                    ))}
                </div>
            </section>

            <button className="btn-contato" onClick={handleClick}>
                Entre em contato
            </button>

            

            {mostrarMensagem && (
                <div className="mensagem-contato">
                    <p>Entre em contato conosco pelo telefone (11) 1234-5678 ou 
                        em envie um e-mail para <a href="mailto:contato@clinicasorriso.com">contato@clinicasorriso.com</a>.</p>
                </div>
            )}
            
        </main>
    );
}

export { HomeMain };