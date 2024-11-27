"use client";
import React, { useState } from "react";
import styles from "../../page.module.css";
import MenuLogado from "../../components/menusuperior_logado";
import Image from "next/image";
import NovoDependente from "@/app/components/novoDependente";
import Rodape from "@/app/components/rodape";

export default function Dependentes() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return(
        <div className={styles.pagina_cadastro} role="main">
            <header aria-label="Menu Principal"><MenuLogado/></header>
            <main className={`${styles.main} ${styles.telaConfiguracoes} ${styles.telaDependentes}`}>
                <div className={styles.topoDependentes}>    
                    <span className={styles.titulo_modalConfiguracoes}>Dependentes</span>  
                    <button className={styles.btnDependentes} onClick={openModal}><Image className={styles.addDep} src="/images/add.png" alt="" width={100} height={100} priority/>NOVO DEPENDENTE</button> 
                </div>
                <div className={styles.dadosDependente}>
                    <div className={styles.info}>
                        <span>Daniel Soares - 12 anos</span>
                        <span>Filho</span>
                    </div>
                    <div className={styles.info}>
                        <span>CPF: 000.000.000-00</span>
                        <span>Data de nascimento: 00/00/0000</span>
                    </div>
                    <Image src="/images/lixeira.svg" className={styles.lixeira} alt="Lixeira" width={100} height={100} priority/>
                </div>
            </main>
            
            {isModalOpen && (
                <NovoDependente onClose={closeModal} /> // Passa a função `closeModal` como prop
            )}

            <footer className={styles.footer} aria-label="Rodapé"><Rodape/></footer>
        </div>
    );
}