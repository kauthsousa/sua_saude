"use client";
import React, {useState} from "react";
import Image from "next/image";
import styles from "../page.module.css";
import InputMask from "react-input-mask";

interface NovoDependenteProps {
    onClose: () => void; // Define o tipo da função de fechar o modal
}

export default function NovoDependente({ onClose }: NovoDependenteProps) {
    const [inputType, setInputType] = useState<string>('text');
    const [dataNascimento, setDataNascimento] = useState<string>("");
    const [dataVisualizada, setDataVisualizada] = useState<string>("");

    const formatarData = (data: string): string => {
        if (!data) return "";
        const [ano, mes, dia] = data.split('-');
        return `${dia}/${mes}/${ano}`;
      };
    
      const handleFocus = () => {
        setInputType('date');
        setDataVisualizada(dataNascimento); // Para mostrar a data ISO ao abrir o calendário
      };
    
      const handleBlur = () => {
        setInputType('text');
        setDataVisualizada(formatarData(dataNascimento)); // Formata para dd/mm/aaaa ao sair do campo
      };

      const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valor = e.target.value;
        setDataNascimento(valor);
        setDataVisualizada(valor);
      };

    return(
        <div className={styles.modalOverlay}>    
            <div className={`${styles.modalCadastro} ${styles.novoDep}`} role="form" aria-labelledby="nomeDependente">
                <Image src="/images/close.png" alt="Botão de Fechar" onClick={onClose} className={styles.btnCloseDep} width={300} height={300} priority/>
                <span id="nomeDependente" className={`${styles.titulo_modalCadastro} ${styles.titulo_novoDep}`}>Daniel Soares</span>
                <form>
                    <div className={styles.dados_novoDep}>
                        <input type="text" placeholder="Nome completo" className={styles.geral} aria-required="true" aria-label="Nome completo" required/>
                        <input
                            type={inputType}
                            value={inputType === 'text' ? dataVisualizada : dataNascimento}
                            onChange={handleDataChange}
                            placeholder="Data de nascimento"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            className={`${styles.pequeno} ${styles.geralC} ${styles.data} ${inputType === 'date' ? styles.dateInput : ''} ${styles.dataDep}`}
                            required
                            aria-required="true"
                            aria-label="Data de Nascimento"
                        />
                        <InputMask mask="999.999.999-99" placeholder="CPF" className={`${styles.geral} ${styles.intermediarioC} ${styles.cpfDep}`} required aria-required="true" aria-label="CPF"/>
                    </div>
                    <button className={styles.btnNovoDep}>Cadastrar</button>
                </form>
            </div>
        </div>
    );
}