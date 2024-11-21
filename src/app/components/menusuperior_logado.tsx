"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import { useState } from "react";
import OpcoesPaciente from "./opcoesPaciente";

export default function MenuLogado() {
    const [showOpcoes, setShowOpcoes] = useState(false); // Estado para controlar a exibição do menu

    const toggleOpcoesPaciente = () => {
        setShowOpcoes((prev) => !prev); // Alterna entre mostrar e esconder
    };

    return (
        <div className={styles.menusuperior}>
            <Link href="../pages/home_paciente"><Image src="/images/logodeitada.png" className={styles.imagem_logo} alt="Sua Saúde logo" width={400} height={50} priority /></Link>
            <nav className={styles.menu_opcoes} aria-label="Menu superior">
                <ul className={styles.logado}>
                    <li className={styles.campo_pesquisa}><input type="text" aria-label="Pesquisar na página" placeholder="Pesquisar..."/><Image src="/images/icon_pesquisa.png" className={styles.icon_pesquisa} alt="Ícone de pesquisa" width={10} height={5} priority /></li>
                    <li><Link href="../pages/favoritos" aria-label="Ir para Favoritos">Favoritos</Link></li>
                    <li><Link href="../pages/agenda" aria-label="Ir para Agenda">Agenda</Link></li>
                    <li>
                        <button onClick={toggleOpcoesPaciente} aria-label="Abrir menu de opções" className={styles.btnPerfil}>
                            <Image src="/images/perfil.png" className={styles.icon_pesquisa} alt="Ícone de pesquisa" width={100} height={100} priority />
                            <span>Karine Sousa</span>
                        </button>
                    </li>
                </ul>
            </nav>
            <OpcoesPaciente show={showOpcoes} />
        </div>
    );
}