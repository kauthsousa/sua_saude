"use client";
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";
import MenuLogado from "@/app/components/menusuperior_logado";
import Carousel from "../../components/carrosel_especialidades";
import Rodape from "../../components/rodape";
import Mapa from '../../components/mapa';
import ProxPaginas from "@/app/components/proxPaginas";
import ListaFavoritos from "@/app/components/listafavoritos";
import AgendarConsulta from "@/app/components/agendarconsulta";


export default function ResultadoPesquisa() {

    const profissionais = [
        {
            nome: "Ana Moreira - Nutricionista Clínica e Esportiva",
            endereco: "Rua dos Prazeres, 18, Centro - Cidade do Norte - CE",
            avaliacoes: 12,
            distancia: "9 km",
            imagem: "/images/profissional_foto1.png",
            titulo: "Agendar Consulta"
        },
        {
            nome: "Amália Andréia - Nutricionista Materno Infantil",
            endereco: "Rua dos Prazeres, 18, Centro - Cidade do Norte - CE",
            avaliacoes: 12,
            distancia: "9 km",
            imagem: "/images/profissional_foto2.png",
            titulo: "Agendar Consulta"
        },
        {
            nome: "João Albuquerque - Nutrição Comportamental",
            endereco: "Rua dos Prazeres, 18, Centro - Cidade do Norte - CE",
            avaliacoes: 12,
            distancia: "9 km",
            imagem: "/images/profissional_foto3.png",
            titulo: "Agendar Consulta"
        },
        {
            nome: "Joana Patrícia - Nutrição Coletiva e Hospitalar",
            endereco: "Rua dos Prazeres, 18, Centro - Cidade do Norte - CE",
            avaliacoes: 12,
            distancia: "9 km",
            imagem: "/images/profissional_foto4.png",
            titulo: "Agendar Consulta"
        }
    ];
    

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProfissional, setSelectedProfissional] = useState(null);

    const handleOpenModal = (profissionais: any) => {
        setSelectedProfissional(profissionais); // Define o profissional selecionado
        setModalOpen(true); // Abre o modal
    };

    const handleCloseModal = () => {
        setModalOpen(false); // Fecha o modal
    };

    return (
        <div className={styles.page}>
            <header><MenuLogado /></header>
            <main className={styles.pesquisaEXT}>

                {/* BANNER TOPO */}
                <div>
                    <Image className={styles.top} src="/images/top2.png" alt={""} layout="responsive" width={1500} height={300} />
                    <span className={`${styles.titulo_modalConfiguracoes} ${styles.tituloFav}`}>Especialidades &gt; Nutricionista </span>
                </div>


                    {/* LISTA PROFISSIONAIS */}
                    <div className={`${styles.lista} ${styles.containerFav}`}>
                        {profissionais.map((profissional, index) => (
                            <ListaFavoritos
                                key={index}
                                profissional={profissional}
                                botaoTexto="Agendar Consulta"
                                onBotaoClick={handleOpenModal}
                            />
                        ))}

                        {modalOpen && (
                            <AgendarConsulta
                                isOpen={modalOpen}
                                onClose={handleCloseModal}
                                profissional={selectedProfissional}
                            />
                        )}

                        <ProxPaginas/>
                    </div>

                    {/* ESPECIALIDADES */}
                    <div>
                        <Carousel />
                    </div>

                    {/* LOCALIZAÇÃO */}
                    <div className={styles.mapa}>
                        <Mapa />
                    </div>
            </main>


            <Rodape />
        </div>
    );
}
