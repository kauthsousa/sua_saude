"use client";
import React, { useState } from "react";
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

type Profissional = {
    id: number;
    nome: string;
    especialidade: string;
    endereco: string;
    avaliacoes: number;
    distancia: string;
    imagem: string;
};

type CardProfissionalProps = {
    profissionais: Profissional[];
};

export default function CardProfissional({ profissionais }: CardProfissionalProps) {
    const [activePage, setActivePage] = useState<number>(1);

    const handlePageClick = (pageNumber: number) => {
        setActivePage(pageNumber);
    };

    return (
        <div>
            {profissionais.map((pro) => (
                <div key={pro.id} className={styles.itemFavorito}>
                    <div className={styles.imgFavorito}>
                        <Image
                            src={pro.imagem}
                            className={styles.proFavorito}
                            alt={`Foto do profissional ${pro.nome}`}
                            width={3500}
                            height={3500}
                            priority
                        />
                        <br />
                        <div>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Image
                                    key={index}
                                    src="/images/estrela.png"
                                    className={styles.estrela}
                                    alt="Estrela de avaliação"
                                    width={500}
                                    height={500}
                                    priority
                                />
                            ))}
                        </div>
                    </div>
                    <div className={styles.dadosPro_favorito}>
                        <Image
                            src="/images/lixeira.svg"
                            className={styles.lixeira}
                            alt="Lixeira"
                            width={100}
                            height={100}
                            priority
                        />
                        <div>
                            <span className={`${styles.dadosGeral} ${styles.nomePro}`}>
                                {pro.nome} - {pro.especialidade}
                            </span>
                            <br />
                            <span className={`${styles.dadosGeral}`}>Endereço: {pro.endereco}</span>
                            <br />
                            <span className={`${styles.dadosGeral}`}>
                                {pro.avaliacoes} avaliações <Link href="/comentarios">( <u>ver comentários</u> )</Link>
                            </span>
                            <br />
                            <span className={`${styles.dadosGeral}`}>{pro.distancia} de distância de você</span>
                            <br />
                        </div>
                        <button className={`${styles.btnConsulta}`}>Agendar Consulta</button>
                    </div>
                </div>
            ))}
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
