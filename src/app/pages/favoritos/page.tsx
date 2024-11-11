"use client";
import React, { useState } from "react";
import styles from "../../page.module.css";
import MenuLogado from "../../components/menusuperior_logado";
import Image from "next/image";
import Link from "next/link";

export default function SemFavoritos() {
    return (
        <div className={styles.pagina_cadastro} role="main">
            <header aria-label="Menu Principal">
                <MenuLogado />
            </header>
            <main className={`${styles.main} ${styles.telaConfiguracoes}`}>
                <div className={styles.telaFavoritos} role="imagem">
                    <span className={styles.titulo_modalConfiguracoes} >Favoritos</span>   
                    <div className={styles.itemFavorito}>
                        <div className={styles.imgFavorito}>
                            <Image src="/images/proFavorito.png" className={styles.proFavorito} alt="Foto do profissional favorito" width={3500} height={3500} priority/><br/>
                            <div>
                                <Image src="/images/estrela.png" className={styles.estrela} alt="Foto do profissional favorito" width={500} height={500} priority/>
                                <Image src="/images/estrela.png" className={styles.estrela} alt="Foto do profissional favorito" width={500} height={500} priority/>
                                <Image src="/images/estrela.png" className={styles.estrela} alt="Foto do profissional favorito" width={500} height={500} priority/>
                                <Image src="/images/estrela.png" className={styles.estrela} alt="Foto do profissional favorito" width={500} height={500} priority/>
                                <Image src="/images/estrela.png" className={styles.estrela} alt="Foto do profissional favorito" width={500} height={500} priority/>
                            </div>
                        </div>
                        <div className={styles.dadosPro_favorito}>
                            <div><span className={`${styles.dadosGeral} ${styles.nomePro}`}>Ana Moreira - Nutricionista Clínica e Esportiva</span><br/>
                            <span className={`${styles.dadosGeral}`}>Endereço: Rua dos Prazeres, 18, Centro - Cidade do Norte - CE</span><br/>
                            <span className={`${styles.dadosGeral}`}>12 avaliações <Link href="/comentarios">( <u>ver comentários</u> )</Link></span><br/>
                            <span className={`${styles.dadosGeral}`}>9 km de distância de você</span><br/></div>
                            <button className={`${styles.btnConsulta}`}>Agendar Consulta</button>
                        </div>
                    </div>
                </div>
            </main>
            <footer className={styles.footer} aria-label="Rodapé">
            </footer>
        </div>
    );
}