"use client";
import React, { useState } from "react";
import styles from "../page.module.css";
import Image from "next/image"; 
import Link from "next/link";

export default function ListaFavoritos() {

    const [activePage, setActivePage] = useState<number>(1); // Estado com tipo explícito

    const handlePageClick = (pageNumber: number) => {
        setActivePage(pageNumber); // Atualiza o estado com o número do botão clicado
    };

    return (
        <div className={styles.componenteFav}>
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
            <Image src="/images/lixeira.svg" className={styles.lixeira} alt="Lixeira" width={100} height={100} priority/>
                <div>
                    <span className={`${styles.dadosGeral} ${styles.nomePro}`}>Ana Moreira - Nutricionista Clínica e Esportiva</span><br/>
                    <span className={`${styles.dadosGeral}`}>Endereço: Rua dos Prazeres, 18, Centro - Cidade do Norte - CE</span><br/>
                    <span className={`${styles.dadosGeral}`}>12 avaliações <Link href="/comentarios">( <u>ver comentários</u> )</Link></span><br/>
                    <span className={`${styles.dadosGeral}`}>9 km de distância de você</span><br/>
                </div>
                <button className={`${styles.btnConsulta}`}>Agendar Consulta</button>
            </div>
            </div>
            <div className={styles.nextPages}>
                {[1, 2, 3].map((page) => (
                    <button
                    key={page}
                    className={`${styles.nPagina} ${activePage === page ? styles.active : ""}`}
                    onClick={() => handlePageClick(page)}
                    >
                    {page}
                    </button>
                ))}
            </div>
        </div>
    );
}