"use client"
import React, {useState} from "react";
import styles from "../../page.module.css";
import MenuLogado from "../../components/menusuperior_logado";
import Calendar from "../../components/calendario";
import Compromissos from "../../components/compromissos";
import Mapa from "@/app/components/mapa";
import Cancelamento from "@/app/components/cancelamento";
import DetalhesConsulta from "@/app/components/detalhesConsulta";

export default function Agenda() {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalAberto, abrirModal] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const modalAbrir = () => abrirModal(true);
    const fecharModal = () => abrirModal(false);

    // Função de confirmação do cancelamento
    const handleConfirmCancel = () => {
        console.log("Consulta cancelada com sucesso!"); // Exemplo de lógica
        closeModal(); // Fecha o modal após confirmar
    };

    return (
        <div>
            <header><MenuLogado/></header>
            <main className={styles.main}>
                <div  className={styles.agenda}></div>
                <div className={styles.divCalendario}><Calendar/></div>
                <div className={styles.consultas}>
                    <span className={styles.consultasTitle}>Consultas Marcadas</span>
                    <div className={styles.compromissoAgenda}>
                        <Compromissos
                            nome="Dra. Cleide Albuquerque - Ginecologista"
                            data="30/11/2024"
                            hora="10:00"
                            botoes={[
                            {
                                texto: "Cancelar compromisso",
                                onClick: () => {console.log("Cancelado");
                                openModal()},
                                classeEstilo: styles.btnCancelar,
                                ariaLabel: "Cancelar compromisso",
                            },
                            {
                                texto: "Confirmar compromisso",
                                onClick: () => console.log("Confirmado"),
                                classeEstilo: styles.btnConfirmar,
                                ariaLabel: "Confirmar compromisso",
                            },
                            ]}
                        />
                    </div>
                    <div>
                        <Compromissos
                            nome="Dra. Cleide Albuquerque - Ginecologista"
                            data="30/11/2024"
                            hora="10:00"
                            botoes={[
                            {
                                texto: "Cancelar compromisso",
                                onClick: () => {console.log("Cancelado");
                                    openModal()},
                                classeEstilo: styles.btnCancelar,
                                ariaLabel: "Cancelar compromisso",
                            },
                            {
                                texto: "Confirmar compromisso",
                                onClick: () => console.log("Confirmado"),
                                classeEstilo: styles.btnConfirmar,
                                ariaLabel: "Confirmar compromisso",
                            },
                            ]}
                        />
                    </div>
                </div>
                <div className={styles.consultas}>
                    <span className={styles.consultasTitle}>Consultas Passadas</span>
                    <div className={styles.compromissoAgenda}>
                        <Compromissos
                            nome="Dra. Cleide Albuquerque - Ginecologista"
                            data="30/11/2024"
                            hora="10:00"
                            botoes={[
                            {
                                texto: "Ver detalhes",
                                onClick: () => {console.log("Detalhes vistos");
                                    modalAbrir();
                                },
                                classeEstilo: styles.btnCancelar,
                                ariaLabel: "Ver detalhes do compromisso",
                            },
                            {
                                texto: "Avaliar",
                                onClick: () => console.log("Avaliado"),
                                classeEstilo: styles.btnConfirmar,
                                ariaLabel: "Avaliar compromisso",
                            },
                            ]}
                        />
                    </div>
                </div>
                {isModalOpen && (
                    <Cancelamento 
                        onClose={closeModal} 
                        onConfirm={handleConfirmCancel} // Passa a lógica para o botão "Sim"
                    />
                )}

                {modalAberto && (
                    <DetalhesConsulta 
                        onClose={fecharModal} 
                    />
                )}

                <Mapa/>
            </main>
            <footer className={styles.footer}></footer>
        </div>
    );
}