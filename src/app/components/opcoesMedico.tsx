import React  from "react";
import styles from "../page.module.css";
import Link from "next/link";

type OpcoesPacienteProps = { 
    show: boolean;
};

const OpcoesMedico: React.FC<OpcoesPacienteProps> = ({ show }) =>{
    return (
        <div className={`${styles.opcoesPaciente} ${styles.opcoesMedico} ${show ? styles.show : ""}`}>
            <ul className={styles.lista_opPaciente}>
                <li><Link href="../pages/dependentes">Clínicas cadastradas</Link></li>
                <li><Link href="../pages/suporte">Suporte</Link></li>
                <li><Link href="../pages/termosdeuso">Termos de uso</Link></li>
                <li><Link href="../pages/configuracoes">Configurações</Link></li>
                <li><Link href="../">Sair</Link></li>
            </ul>
        </div>
    );
}
export default OpcoesMedico;