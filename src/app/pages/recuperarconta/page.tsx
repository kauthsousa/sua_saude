"use client"
import React from "react";
import styles from "../../page.module.css";
import MenuDeslogado from "../../components/menusuperior_deslogado";
import Image from "next/image";
import Link from "next/link";

export default function RecuperarConta() {

    return (
        <div className={styles.pagina_cadastro} role="main">
            <header aria-label="Menu Principal">
                <MenuDeslogado />
            </header>
            <main className={`${styles.main} ${styles.telaCadastro}`}>
                <Image
                    src="/images/ÍconesCadastro.png"
                    className={styles.imgCadastro}
                    alt="Ícones representativos"
                    width={500}
                    height={300}
                    priority
                />
                <div className={`${styles.modalCadastro} ${styles.recConta}`} role="form" aria-labelledby="tituloRecuperarConta">
                    <span id="tituloRecuperarConta" className={styles.titulo_modalCadastro}>Recuperar Conta</span>
                    <div className={styles.camposCadastro}>
                        <form>
                            <label htmlFor="email" aria-hidden="true" hidden>Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                maxLength={100}
                                className={`${styles.geral} ${styles.codProf} ${styles.inputLogin}`}
                                required
                                aria-required="true"
                                aria-label="Email"
                            />
                            <span className={`${styles.avisoRecConta}`}>Enviaremos uma nova senha para o seu e-mail, lembre-se de alterá-la após o login</span>
                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            </main>
            <footer className={styles.footer} aria-label="Rodapé">
            </footer>
        </div>
    );
}
