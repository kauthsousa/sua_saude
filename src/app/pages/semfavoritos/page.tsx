"use client";
import React, { useState } from "react";
import styles from "../../page.module.css";
import MenuLogado from "../../components/menusuperior_logado";
import Image from "next/image";
import Rodape from "@/app/components/rodape";

export default function SemFavoritos() {
    return (
        <div className={styles.pagina_cadastro} role="main">
            <header aria-label="Menu Principal">
                <MenuLogado />
            </header>
            <main className={`${styles.main} ${styles.telaConfiguracoes}`}>
                <div role="imagem">
                    <Image src="/images/sem_favoritos.png" className={styles.img_semFavoritos} alt="Imagem sem favoritos" width={2500} height={500} priority/>
                </div>
            </main>
            <footer className={styles.footer} aria-label="Rodapé">
                <Rodape/>
            </footer>
        </div>
    );
}