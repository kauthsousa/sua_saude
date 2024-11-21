import React, { useEffect, useState } from "react";
import styles from "../page.module.css";

const Compromissos = () => {
    return(
        <div className={styles.compromisso}>
            <div className={styles.dadosCompromisso}>
                <input type="text" value={"Dra. Cleide Albuquerque - Ginecologista"} className={styles.inputCompromisso}/>  
                <span>01/01/2024 | 14:00:00</span>
                <div className={styles.btnCompromisso}>
                    <button className={styles.btnCancelar}>Cancelar atendimento</button>  
                    <button className={styles.btnConfirmar}>Confirmar atendimento</button>    
                </div>          
            </div>
        </div>
    );
}

export default Compromissos;