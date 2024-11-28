"use client";
import React from "react";
import styles from "../../page.module.css";
import MenuLogado from "../../components/menusuperior_logado";
import ListaFavoritos from "@/app/components/listafavoritos";

export default function Favoritos() {

    const profissional = {
        nome: "Ana Moreira - Nutricionista Clínica e Esportiva",
        endereco: "Rua dos Prazeres, 18, Centro - Cidade do Norte - CE",
        avaliacoes: 12,
        distancia: "9 km",
        imagem: "/images/proFavorito.png",
      };
    
      const handleAgendarConsulta = (profissional: any) => {
        alert(`Você clicou em Agendar Consulta para: ${profissional.nome}`);
      };

    return (
        <div className={styles.pagina_cadastro} role="main">
            <header aria-label="Menu Principal">
                <MenuLogado />
            </header>
            <main className={`${styles.main} ${styles.telaConfiguracoes}`}>
                <div className={styles.telaFavoritos} role="imagem">
                    <span className={`${styles.titulo_modalConfiguracoes} ${styles.tituloFav}`}>Favoritos</span>   
                    <div className={styles.containerFav}><ListaFavoritos profissional={profissional} botaoTexto="Agendar Consulta" onBotaoClick={handleAgendarConsulta}/></div>{/* no onBotãoClick você coloca para chamar o modal, ao invés desse handleAgendarConsulta */}
                </div>
            </main>
            <footer className={styles.footer} aria-label="Rodapé">
            </footer>
        </div>
    );
}