"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <div className={styles.contato}>
                <div className={styles.social}>
                    <FaFacebook className={styles.icon_rede_social} />
                    <FaInstagram className={styles.icon_rede_social} />
                </div>
                <p>solutionsseteno@gmail.com</p>
                <p>(99) 9 9999 9999</p>
                <p>© Steno Solutions 2023 - Todos os direitos reservados</p>
            </div>
            <div className={styles.section}>
                <h4><u>Sobre</u></h4>
                <ul>
                    <li><Link href="../pages/cadastrouser">Cadastre-se</Link></li>
                    <li><Link href="../pages/termosdeuso">Termos de Uso</Link></li>
                    <li><Link href="../pages/faleconosco">Fale Conosco</Link></li>
                </ul>
            </div>
            <div className={styles.section}>
                <h4><u>Paciente</u></h4>
                <ul>
                    <li><Link href="../pages/centraldeajuda">Central de ajuda</Link></li>
                    <li><Link href="../pages/login">Login</Link></li>
                </ul>
            </div>
            <div className={styles.section}>
                <h4><u>Clínicas</u></h4>
                <ul>
                    <li>Quero ser uma clínica parceira</li>
                </ul>
            </div>
        </footer>
    );
}