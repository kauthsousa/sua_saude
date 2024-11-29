"use client";

import React, { useState } from "react";
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";

interface Profissional {
    nome: string;
    endereco: string;
    avaliacoes: number;
    distancia: string;
    imagem: string;
}

interface ListaFavoritosProps {
    profissional: Profissional;
    botaoTexto: string;
    onBotaoClick: (profissional: Profissional) => void;
    iconeLixeira?: string; // Parâmetro opcional
}

const ListaFavoritos: React.FC<ListaFavoritosProps> = ({
    profissional,
    botaoTexto,
    onBotaoClick,
    iconeLixeira,
}) => {
    const [activePage, setActivePage] = useState<number>(1);

    const handlePageClick = (pageNumber: number) => {
        setActivePage(pageNumber);
    };

    return (
        <div className={styles.componenteFav}>
            <div className={styles.itemFavorito}>
                <div className={styles.imgFavorito}>
                    {/* Imagem do profissional */}
                    <Image
                        src={profissional.imagem}
                        className={styles.proFavorito}
                        alt={`Foto de ${profissional.nome}`}
                        width={3500}
                        height={3500}
                        priority
                    />
                    <br />
                    <div className={styles.estrelasDiv}>
                        {/* Estrelas fixas */}
                        {[...Array(5)].map((_, index) => (
                            <Image
                                key={index}
                                src="/images/estrela.svg"
                                className={styles.estrelas}
                                alt="Estrela"
                                width={500}
                                height={500}
                                priority
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.dadosPro_favorito}>
                    {/* Ícone de lixeira, renderizado apenas se iconeLixeira for fornecido */}
                    {iconeLixeira && (
                        <Image
                            src={iconeLixeira}
                            className={styles.lixeira}
                            alt="Lixeira"
                            width={100}
                            height={100}
                            priority
                        />
                    )}
                    <div>
                        {/* Dados do profissional */}
                        <span className={`${styles.dadosGeral} ${styles.nomePro}`}>
                            {profissional.nome}
                        </span>
                        <br />
                        <span className={`${styles.dadosGeral}`}>
                            Endereço: {profissional.endereco}
                        </span>
                        <br />
                        <span className={`${styles.dadosGeral}`}>
                            {profissional.avaliacoes} avaliações{" "}
                            <Link href="/comentarios">
                                ( <u>ver comentários</u> )
                            </Link>
                        </span>
                        <br />
                        <span className={`${styles.dadosGeral}`}>
                            {profissional.distancia} de distância de você
                        </span>
                        <br />
                    </div>
                    {/* Botão dinâmico */}
                    <button
                        className={`${styles.btnConsulta}`}
                        onClick={() => onBotaoClick(profissional)}
                    >
                        {botaoTexto}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ListaFavoritos;
