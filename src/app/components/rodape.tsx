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
                <h4>Sobre</h4>
                <ul>
                    <li>Cadastre-se</li>
                    <li>Termo de uso</li>
                    <li>Fale conosco</li>
                </ul>
            </div>
            <div className={styles.section}>
                <h4>Paciente</h4>
                <ul>
                    <li>Central de ajuda</li>
                    <li>Fazer login</li>
                </ul>
            </div>
            <div className={styles.section}>
                <h4>Clínicas</h4>
                <ul>
                    <li>Quero ser uma clínica parceira</li>
                </ul>
            </div>
        </footer>
    );
}