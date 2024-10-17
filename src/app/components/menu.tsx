"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

export default function Menu() {
    return (
        <div className={styles.menusuperior}>
            <Image src="/sua_saude/src/app/images/logodeitada.png" className={styles.imagem_logo} alt="Sua Saúde logo" width={160} height={80} priority/>
            <nav className={styles.menu_opcoes} aria-label="Menu lateral">
                <ul>
                    <li><Link href="../user/home" aria-label="Ir para Seja um parceiro">Seja um Parceiro</Link></li>
                    <li><Link href="../user/produto" aria-label="Ir para Fale Conosco">Fale Conosco</Link></li>
                    <li><Link href="../user/vendas" aria-label="Ir para Cadastre-se">Cadastre-se</Link></li>
                    <li></li>
                </ul>
            </nav>
        </div>
    );
}