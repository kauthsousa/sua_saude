"use client"
import React from "react";
import styles from "../../page.module.css";
import MenuDeslogado from "../../components/menusuperior_deslogado";
import Image from "next/image";
import Link from "next/link";

export default function Login() {

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
                <div className={`${styles.modalCadastro} ${styles.login}`} role="form" aria-labelledby="tituloLogin">
                    <span id="tituloLogin" className={styles.titulo_modalCadastro}>Login</span>
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
                            <label htmlFor="Senha" aria-hidden="true" hidden>Senha</label>
                            <input
                                type="password"
                                id="senha"
                                placeholder="Senha"
                                maxLength={50}
                                className={`${styles.geral} ${styles.codProf} ${styles.inputLogin}`}
                                required
                                aria-required="true"
                                aria-label="Senha"
                            />
                            <Link href="recuperarconta" className={`${styles.esqueceuSenha} ${styles.hoverLink}`}>Esqueceu a senha? Recuperar conta</Link>
                            <button type="submit">Entrar</button>
                            <Link href="cadastrouser" className={`${styles.semConta} ${styles.hoverLink}`}>Ainda não possui conta? Cadastre-se</Link>
                        </form>
                    </div>
                </div>
            </main>
            <footer className={styles.footer} aria-label="Rodapé">
            </footer>
        </div>
    );
}
