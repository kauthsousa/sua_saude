"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

export default function MenuClinica() {
    return (
        <div className={styles.menusuperior}>
            <Image src="/images/logodeitada.png" className={styles.imagem_logo} alt="Sua Saúde logo" width={400} height={50} priority />
            <nav className={styles.menu_opcoes} aria-label="Menu superior">
                <ul className={styles.deslogado}>
                    <li><Link href="../pages/planos" aria-label="Vizualizar planos disponíveis">Planos</Link></li>
                    <li><Link href="../pages/faleconosco" aria-label="Entrar em contato">Contato</Link></li>
                    <li><Link href="../pages/cadastrouser" aria-label="Ir para Cadastre-se">Cadastre-se</Link></li>
                    <li><Link href="../pages/login" aria-label="Ir para Login">Entrar</Link></li>
                </ul>
            </nav>
        </div>
    );
}