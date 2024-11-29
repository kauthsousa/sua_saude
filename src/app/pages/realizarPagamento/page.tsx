"use client"
import React, {useState} from "react";
import styles from "../../page.module.css";
import MenuLogado from "../../components/menusuperior_logado";
import InputMask from "react-input-mask";

export default function Favoritos() {

    const [monthYear, setMonthYear] = useState("");

    return (
        <div>
            <header><MenuLogado/></header>
            <main className={`${styles.main} ${styles.telaConfiguracoes} ${styles.telaPagamento}`}>
                <div className={styles.conteudoPagamento}>
                    <div className={`${styles.titulo_modalConfiguracoes} ${styles.tituloPagamento}`}>
                        Especialidade &gt; Nutricionista &gt; Agendamento &gt; Pagamento
                    </div>
                    <div className={styles.btnBoletos}>
                        <button className={styles.btn}>Gerar Boleto</button>
                        <button className={styles.btn}>Gerar Código Pix</button>
                    </div>
                    <div className={styles.cartaoCredito}>
                        <span className={styles.titulo_modalConfiguracoes}>CARTÃO DE CRÉDITO</span>      
                        <div className={styles.dadosCartao}>
                            <div className={styles.inputContent}>
                                <label htmlFor="Número do cartão">Número do cartão </label>
                                <InputMask mask="9999 9999 9999 9999" placeholder="0000 0000 0000 0000" className={styles.inputCartao} required aria-required="true" aria-label="Número do cartão" readOnly aria-readonly="true"/>
                            </div>
                            <div className={styles.inputContent}>
                                <label htmlFor="Expira em">Expira em</label>
                                <InputMask
                                    id="monthYear"
                                    mask="99/9999"
                                    value={monthYear}
                                    onChange={(e) => setMonthYear(e.target.value)}
                                    placeholder="MM/YYYY"
                                >
                                    {(inputProps) => <input {...inputProps} type="text" />}
                                </InputMask>
                            </div>
                            <div className={styles.inputContent}>
                                <label htmlFor="Número do cartão">Número do cartão </label>
                                <InputMask mask="9999 9999 9999 9999" placeholder="0000 0000 0000 0000" className={styles.inputCartao} required aria-required="true" aria-label="Número do cartão" readOnly aria-readonly="true"/>
                            </div>
                            <div className={styles.inputContent}>
                                <label htmlFor="Número do cartão">Número do cartão </label>
                                <InputMask mask="9999 9999 9999 9999" placeholder="0000 0000 0000 0000" className={styles.inputCartao} required aria-required="true" aria-label="Número do cartão" readOnly aria-readonly="true"/>
                            </div>
                        </div>
                        <div className={styles.imgCartao}>

                        </div>
                    </div>
                </div>
            </main>
            <footer className={styles.footer}></footer>
        </div>
    );
}