"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";
import MenuDeslogado from "../../components/menusuperior_deslogado";
import Carousel from "../../components/carrosel_especialidades";
import Rodape from "../../components/rodape";
import Mapa from '../../components/mapa';
import Pesquisa from "../../components/inputs_pesquisa";
import CardProfissional from "../../components/cardprofissional";

export default function Home() {

    const profissionais = [
        {
            id: 1,
            nome: "Ana Moreira",
            especialidade: "Nutricionista Clínica e Esportiva",
            endereco: "Rua dos Prazeres, 18, Centro - Cidade do Norte - CE",
            avaliacoes: 12,
            distancia: "9 km",
            imagem: "/images/proFavorito.png",
        },
        {
            id: 2,
            nome: "Amália Andréia",
            especialidade: "Nutricionista Materno Infantil",
            endereco: "Rua dos Prazeres, 18, Centro - Cidade do Norte - CE",
            avaliacoes: 15,
            distancia: "9 km",
            imagem: "/images/proFavorito2.png",
        },
        {
            id: 3,
            nome: "João Albuquerque",
            especialidade: "Nutrição Comportamental",
            endereco: "Rua dos Prazeres, 18, Centro - Cidade do Norte - CE",
            avaliacoes: 8,
            distancia: "9 km",
            imagem: "/images/proFavorito3.png",
        },
        {
            id: 4,
            nome: "Joana Patrícia",
            especialidade: "Nutrição Coletiva e Hospitalar",
            endereco: "Rua dos Prazeres, 18, Centro - Cidade do Norte - CE",
            avaliacoes: 10,
            distancia: "9 km",
            imagem: "/images/proFavorito4.png",
        },
    ];


    return (
        <div className={styles.page}>
            <header><MenuDeslogado /></header>
            <main className={styles.main}>

                {/* BANNER TOPO */}
                <div className={styles.banner_pesquisa}>
                    <Image className={styles.top} src="/images/top.png" alt={""} layout="responsive" width={1500} height={300} />
                    <Image className={styles.icone_central} src="/images/locale.png" alt={""} width={80} height={80} />

                    {/* INPUTS DE PESQUISA */}
                    <Pesquisa />

                    {/* LISTA PROFISSIONAIS*/}
                    <div className={styles.lista}>
                        <CardProfissional profissionais={profissionais} />
                    </div>

                    {/* ESPECIALIDADES */}
                    <div>
                        <Carousel />
                    </div>

                    {/* LOCALIZAÇÃO */}
                    <div className={styles.mapa}>
                        <Mapa />
                    </div>
                </div>
            </main>


            <Rodape></Rodape>
        </div>
    );
}
