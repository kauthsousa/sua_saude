"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "../../page.module.css";
import MenuDeslogado from "../../components/menusuperior_deslogado";
import Rodape from "../../components/rodape";
import InputMask from "react-input-mask";

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

export default function FaleConosco() {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setModalOpen(true);
    };

    const closeModal = () => {
        location.reload();
        setModalOpen(false);
    };

    return (
        <div className={styles.page}>
            <header><MenuDeslogado /></header>
            {/*O nome dessa classe está "contato" por usar as mesmas propriedades de um elemento de outra página*/}
            <main>
                <div className={styles.telaCadastro}>
                    <div className={styles.chamadaContato}>
                        <h1>Fale Conosco!</h1>
                        <h3>
                            Entre em contato conosco e tire suas dúvidas.
                            Teremos prazer em te atender! Sua saúde é a nossa prioridade.
                        </h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formulario}>
                            <input type="text" placeholder="Nome Completo" required />
                            <input type="email" placeholder="Email" required />
                            <InputMask mask="(99) 9.9999-9999" placeholder="Telefone" required />
                            <input type="text" placeholder="Assunto" required />
                            <textarea placeholder="Descrição" required />
                            <button type="submit">Enviar Feedback</button>
                        </div>
                    </form>

                    {/* Modal */}
                    <FeedbackModal isOpen={isModalOpen} onClose={closeModal} />
                </div>
            </main>

            <Rodape />
        </div>
    );
}

