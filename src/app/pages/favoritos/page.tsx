"use client";
import React, { useState } from "react";
import styles from "../../page.module.css";
import MenuLogado from "../../components/menusuperior_logado";
import ListaFavoritos from "@/app/components/listafavoritos";

export default function Favoritos() {

    /*const [activePage, setActivePage] = useState<number>(1); // Estado com tipo explícito

    const handlePageClick = (pageNumber: number) => {
        setActivePage(pageNumber); // Atualiza o estado com o número do botão clicado
    };*/

    return (
        <div className={styles.pagina_cadastro} role="main">
            <header aria-label="Menu Principal">
                <MenuLogado />
            </header>
            <main className={`${styles.main} ${styles.telaConfiguracoes}`}>
                <div className={styles.telaFavoritos} role="imagem">
                    <span className={`${styles.titulo_modalConfiguracoes} ${styles.tituloFav}`}>Favoritos</span>   
                    <div className={styles.containerFav}><ListaFavoritos/></div>
                </div>
            </main>
            <footer className={styles.footer} aria-label="Rodapé">
            </footer>
        </div>
    );
}