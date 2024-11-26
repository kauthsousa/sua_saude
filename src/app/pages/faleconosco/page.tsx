"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "../../page.module.css";
import MenuDeslogado from "../../components/menusuperior_deslogado";
import Rodape from "../../components/rodape";

export default function Home() {

    return (
        <div className={styles.page}>
            <header><MenuDeslogado /></header>
            <main className={styles.telaCadastro}>
                <div>
                    <div className={styles.chamadaContato}>
                        <h1>Fale Conosco</h1>
                        <h3>Entre em contato conosco e tire suas dúvidas. Teremos prazer em te atender! Sua saúde é a nossa prioridade</h3>
                    </div>
                    <div className={styles.modal}>
                        <input type="text" placeholder="Nome Completo" />
                        <input type="text" placeholder="E-mail" />
                        <input type="text" placeholder="Telefone" />
                        <input type="text" placeholder="Assunto" />
                        <textarea placeholder="Descrição" />
                        <button>Enviar Feedback</button>
                    </div>
                </div>
            </main>
            <Rodape></Rodape>
        </div>
    );
}
