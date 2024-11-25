"use client";
import React from "react";
import styles from "../../page.module.css";
import MenuLogado from "../../components/menusuperior_logado";
import ListaFavoritos from "@/app/components/listafavoritos";

export default function Favoritos() {

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