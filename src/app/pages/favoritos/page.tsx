"use client";
import React, {useState} from "react";
import styles from "../../page.module.css";
import MenuLogado from "../../components/menusuperior_logado";
import ListaFavoritos from "@/app/components/listafavoritos";
import Rodape from "@/app/components/rodape";
import AgendarConsulta from "@/app/components/agendarconsulta";

export default function Favoritos() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProfissional, setSelectedProfissional] = useState(null);

    const profissional = {
        nome: "Ana Moreira - Nutricionista Clínica e Esportiva",
        endereco: "Rua dos Prazeres, 18, Centro - Cidade do Norte - CE",
        avaliacoes: 12,
        distancia: "9 km",
        imagem: "/images/profissional_foto1.png",
        titulo: "Agendar Consulta"
    };

    const handleOpenModal = (profissional : any) => {
        setSelectedProfissional(profissional); // Define o profissional selecionado
        setModalOpen(true); // Abre o modal
    };

    const handleCloseModal = () => {
        setModalOpen(false); // Fecha o modal
    };

    return (
        <div className={styles.pagina_cadastro} role="main">
            <header aria-label="Menu Principal">
                <MenuLogado />
            </header>
            <main className={`${styles.main} ${styles.telaConfiguracoes}`} role="main">
                <div className={styles.telaFavoritos} role="region" aria-labelledby="favoritos-title">
                    <span id="favoritos-title" className={`${styles.titulo_modalConfiguracoes} ${styles.tituloFav}`}>
                        Favoritos
                    </span>
                    <div className={styles.containerFav}>
                        <ListaFavoritos
                            profissional={profissional}
                            botaoTexto="Agendar Consulta"
                            onBotaoClick={handleOpenModal}
                            iconeLixeira="/images/lixeira.svg"
                        />
                    </div>
                </div>
            </main>

            {modalOpen && (
                <AgendarConsulta
                    isOpen={modalOpen}
                    onClose={handleCloseModal}
                    profissional={selectedProfissional}
                />
            )}

            <footer className={styles.footer} aria-label="Rodapé">
                <Rodape />
            </footer>
        </div>
    );
}