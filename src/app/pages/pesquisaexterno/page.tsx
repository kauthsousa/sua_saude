"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";
import MenuDeslogado from "../../components/menusuperior_deslogado";
import Carousel from "../../components/carrosel_especialidades";
import Rodape from "../../components/rodape";
import Mapa from '../../components/mapa';
import ProxPaginas from "@/app/components/proxPaginas";
import Pesquisa from "@/app/components/inputs_pesquisa";
import ListaFavoritos from "@/app/components/listafavoritos";
import ModalVerificarDisponibilidade from "@/app/components/verificar_disponibilidade";

export default function PesquisaExterno() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const profissionais = [
        {
            nome: "Ana Moreira - Nutricionista Clínica e Esportiva",
            endereco: "Rua dos Prazeres, 18, Centro - Cidade do Norte - CE",
            avaliacoes: 12,
            distancia: "9 km",
            imagem: "/images/profissional_foto1.png",
        },
        {
            nome: "Amália Andréia - Nutricionista Materno Infantil",
            endereco: "Rua dos Prazeres, 18, Centro - Cidade do Norte - CE",
            avaliacoes: 12,
            distancia: "9 km",
            imagem: "/images/profissional_foto2.png",
        },
        {
            nome: "João Albuquerque - Nutrição Comportamental",
            endereco: "Rua dos Prazeres, 18, Centro - Cidade do Norte - CE",
            avaliacoes: 12,
            distancia: "9 km",
            imagem: "/images/profissional_foto3.png",
        },
        {
            nome: "Joana Patrícia - Nutrição Coletiva e Hospitalar",
            endereco: "Rua dos Prazeres, 18, Centro - Cidade do Norte - CE",
            avaliacoes: 12,
            distancia: "9 km",
            imagem: "/images/profissional_foto4.png",
        }
    ];

    const fecharModalDisponibilidade = () => setIsModalOpen(false);

    const modal_verificar_disponibilidade = (profissional: any) => {
        setIsModalOpen(true); // Abre o modal ao clicar no botão
        console.log(`Verificando disponibilidade para: ${profissional.nome}`);
    };

    return (
        <div className={styles.page}>
            <header><MenuDeslogado /></header>
            <main className={styles.pesquisaEXT}>
                {/* BANNER TOPO */}
                <div>
                    <Image className={styles.top} src="/images/top.png" alt={""} layout="responsive" width={1500} height={300} />
                    <Image className={styles.icone_central} src="/images/locale.png" alt={""} width={80} height={80} />
                    <Pesquisa />
                </div>

                {/* LISTA PROFISSIONAIS */}
                <div className={`${styles.lista} ${styles.containerFav}`}>
                    {profissionais.map((profissional, index) => (
                        <ListaFavoritos
                            key={index}
                            profissional={profissional}
                            botaoTexto="Verificar Disponibilidade"
                            onBotaoClick={modal_verificar_disponibilidade}
                        />
                    ))}

                    <ProxPaginas />
                </div>

                {/* ESPECIALIDADES */}
                <div>
                    <Carousel />
                </div>

                {/* LOCALIZAÇÃO */}
                <div className={styles.mapa}>
                    <Mapa />
                </div>

                {/* Modal de Verificar Disponibilidade */}
                {isModalOpen && (
                    <ModalVerificarDisponibilidade
                        isOpen={isModalOpen}
                        onClose={fecharModalDisponibilidade}
                        profissional={profissionais.find(p => p.nome === "Ana Moreira - Nutricionista Clínica e Esportiva")} // Exemplo
                    />
                )}
            </main>

            <Rodape />
        </div>
    );
}
