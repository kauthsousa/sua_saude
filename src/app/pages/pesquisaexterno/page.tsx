"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";
import MenuDeslogado from "../../components/menusuperior_deslogado";
import Carousel from "../../components/carrosel_especialidades";
import Rodape from "../../components/rodape";
import Mapa from '../../components/mapa';
import Pesquisa from "../../components/inputs_pesquisa";
import ListaFavoritos from "@/app/components/listafavoritos";

export default function Home() {

    const profissionais = [
        {
            nome: "Ana Moreira - Nutricionista Clínica e Esportiva",
            endereco: "Rua dos Prazeres, 18, Centro - Cidade do Norte - CE",
            avaliacoes: 12,
            distancia: "9 km",
            imagem: "/images/proFavorito.png",
        },
        {
            nome: "Carlos Souza - Personal Trainer",
            endereco: "Avenida das Flores, 123, Bairro Jardim - Cidade do Norte - CE",
            avaliacoes: 20,
            distancia: "5 km",
            imagem: "/images/carlos.png",
        },
        {
            nome: "Marina Oliveira - Psicóloga",
            endereco: "Praça Central, 45, Centro - Cidade do Norte - CE",
            avaliacoes: 15,
            distancia: "8 km",
            imagem: "/images/marina.png",
        }
    ];

    const handleAgendarConsulta = (profissional: any) => {
        alert(`Você clicou em Agendar Consulta para: ${profissional.nome}`);
    };

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

                    {/* LISTA PROFISSIONAIS */}
                    <div className={styles.lista}>
                        {profissionais.map((profissional, index) => (
                            <ListaFavoritos
                                key={index}
                                profissional={profissional}
                                botaoTexto="Agendar Consulta"
                                onBotaoClick={handleAgendarConsulta}
                            />
                        ))}
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

            <Rodape />
        </div>
    );
}
