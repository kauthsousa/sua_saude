import React from "react";
import styles from "../page.module.css";

interface CancelamentoProps {
    onClose: () => void; // Define o tipo da função de fechar o modal
    onConfirm: () => void; // Define a ação ao confirmar o cancelamento
}

export default function Cancelamento({ onClose, onConfirm }: CancelamentoProps) {
    return (
        <div className={styles.modalOverlay}>
            <div className={`${styles.modalCadastro} ${styles.cancelamento}`} role="form" aria-labelledby="nomeDependente">
                <span id="nomeDependente" className={`${styles.titleCancelamento}`}>
                    Você tem certeza que deseja cancelar o atendimento?
                </span>
                <div className={styles.botoesModal}>
                    <button 
                        type="button" 
                        className={styles.btnComFundo} 
                        onClick={onConfirm} // Ação de confirmação
                    >
                        Sim
                    </button>
                    <button 
                        type="button" 
                        className={styles.btnSemFundo} 
                        onClick={onClose} // Fecha o modal sem confirmar
                    >
                        Não
                    </button>
                </div>
            </div>
        </div>
    );
}
