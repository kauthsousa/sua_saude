"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "../../page.module.css";
import MenuDeslogado from "../../components/menusuperior_deslogado";
import Rodape from "../../components/rodape";

// Componente Modal
function FeedbackModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <p>Agradecemos seu contato, iremos te responder assim que possível!</p>
                <button onClick={onClose} className={styles.fechar}>Fechar</button>
            </div>
        </div>
    );
}

export default function Home() {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className={styles.page}>
            <header><MenuDeslogado /></header>
            {/*O nome dessa classe está "contato" por usar as mesmas propriedades de um elemento de outra página*/}
            <main className={styles.telaCadastro}>
                <div className={styles.chamadaContato}>
                    <h1>Fale Conosco</h1>
                    <h3>
                        Entre em contato conosco e tire suas dúvidas. Teremos prazer em te atender! Sua saúde é a nossa prioridade.
                    </h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.modal}>
                        <input type="text" placeholder="Nome Completo" required />
                        <input type="email" placeholder="E-mail" required />
                        <input type="text" placeholder="Telefone" />
                        <input type="text" placeholder="Assunto" required />
                        <textarea placeholder="Descrição" required />
                        <button type="submit">Enviar Feedback</button>
                    </div>
                </form>

                {/* Modal */}
                <FeedbackModal isOpen={isModalOpen} onClose={closeModal} />
            </main>

            <Rodape />
        </div>
    );
}

