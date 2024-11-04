"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

export default function MenuDeslogado() {
    return (
        <div className={styles.menusuperior}>
            <Image src="/images/logodeitada.png" className={styles.imagem_logo} alt="Sua Saúde logo" width={400} height={50} priority />
            <nav className={styles.menu_opcoes} aria-label="Menu superior">
                <ul className={styles.deslogado}>
                    <li><Link href="../pages/sejaparceiro" aria-label="Ir para Seja um parceiro">Seja um Parceiro</Link></li>
                    <li><Link href="../pages/faleconosco" aria-label="Ir para Fale Conosco">Fale Conosco</Link></li>
                    <li><Link href="../pages/cadastrouser" aria-label="Ir para Cadastre-se">Cadastre-se</Link></li>
                    <Link href="../pages/login" aria-label="Ir para Login"><li>Entrar</li></Link>
                </ul>
            </nav>
        </div>
    );
}