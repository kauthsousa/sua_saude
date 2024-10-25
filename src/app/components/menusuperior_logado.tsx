"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

export default function MenuDeslogado() {
    return (
        <div className={styles.menusuperior}>
            <Image src="/images/logodeitada.png" className={styles.imagem_logo} alt="Sua Saúde logo" width={400} height={50} priority />
            <nav className={styles.menu_opcoes} aria-label="Menu superior">
                <ul className={styles.logado}>
                    <li className={styles.campo_pesquisa}><input type="text" aria-label="Pesquisar na página" placeholder="Pesquisar..."/><Image src="/images/icon_pesquisa.png" className={styles.icon_pesquisa} alt="Ícone de pesquisa" width={10} height={5} priority /></li>
                    <li><Link href="../user/favoritos" aria-label="Ir para Favoritos">Favoritos</Link></li>
                    <li><Link href="../user/agenda" aria-label="Ir para Agenda">Agenda</Link></li>
                    <li><Link href="../user/configurações_perfil" aria-label="Ir para configurações de Perfil" className={styles.btnPerfil}><Image src="/images/perfil.png" className={styles.icon_pesquisa} alt="Ícone de pesquisa" width={100} height={100} priority /><span>Karine Sousa</span></Link></li>
                </ul>
            </nav>
        </div>
    );
}