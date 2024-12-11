"use client"
import React, {useState} from "react";
import styles from "../../page.module.css";
import MenuLogado from "../../components/menusuperior_logado";
import InputMask from "react-input-mask";
import Image from "next/image";

export default function Favoritos() {

    const [monthYear, setMonthYear] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardName, setCardName] = useState("");
    const [cardImage, setCardImage] = useState("/images/default_card.svg");

    const getCardTypeImage = (number: string): string => {
        const sanitizedNumber = number.replace(/\s/g, ""); // Remove os espaços
        if (/^4/.test(sanitizedNumber)) return "/images/visa.svg";    
        if (/^5[1-5]/.test(sanitizedNumber) || /^2(2[2-9]|[3-6]|7[0-1]|72[0])/.test(sanitizedNumber)) {
            return "/images/mastercard.svg";
        }
        if (/^3[47]/.test(sanitizedNumber)) return "/images/amex.svg"; // American Express começa com 34 ou 37
        return "/images/default_card.png"; // Padrão
    };

    const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        setCardNumber(value); // Atualiza o estado com o valor digitado
        setCardImage(getCardTypeImage(value)); // Atualiza a imagem com base no número
    };


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
                        <div className={styles.conteudoCartao}>
                            <div className={styles.dadosCartao}>
                                <div className={styles.inputContent}>
                                    <label htmlFor="Número do cartão">Número do cartão </label>
                                    <div className={styles.interiorInput}>
                                        <Image src="/images/mini_ cartao.svg" alt="ícone de cartão de crédito" width={30} height={30} priority/>
                                        <InputMask mask="9999 9999 9999 9999" placeholder="0000 0000 0000 0000" className={styles.inputCartao} required aria-required="true" aria-label="Número do cartão" value={cardNumber} onChange={handleCardNumberChange}/>
                                    </div>
                                </div>
                                <div className={styles.inputContent}>
                                    <label htmlFor="Expira em">Expira em</label>
                                    <div className={styles.interiorInput}>
                                        <Image src="/images/data_cartao.svg" alt="ícone de calendário" width={30} height={30} priority/>
                                        <InputMask
                                            id="monthYear"
                                            mask="99/9999"
                                            value={monthYear}
                                            onChange={(e) => setMonthYear(e.target.value)}
                                            placeholder="MM/YYYY"
                                        >
                                            {(inputProps) => <input {...inputProps} type="text" className={styles.inputCartao} />}
                                        </InputMask>
                                    </div>
                                </div>
                                <div className={styles.inputContent}>
                                    <label htmlFor="Número do cartão">Código de segurança</label>
                                    <div className={styles.interiorInput}>
                                        <Image src="/images/cadeado.svg" alt="ícone de cadeado" width={30} height={30} priority/>
                                        <InputMask mask="999" type="text" placeholder="CVC" className={styles.inputCartao} required aria-required="true" aria-label="Número do cartão"/>
                                    </div>
                                </div>
                                <div className={styles.inputContent}>
                                    <label htmlFor="Nome no cartão">Nome no cartão </label>
                                    <div className={styles.interiorInput}>
                                        <input type="text" placeholder="Escreva o nome que está no cartão" className={styles.inputCartao} required aria-required="true" aria-label="Número do cartão" value={cardName} onChange={(e) => setCardName(e.target.value)}/>
                                    </div>
                                </div>
                                <div className={styles.inputContent}>
                                    <button className={`${styles.btn} ${styles.btnPagamento}`}>Pagar Agora</button>
                                    <div className={styles.segurancaCartao}>
                                        <Image src="/images/cadeado_preenchido.svg" alt="" height={12} width={12} priority/>
                                        <span>Your transaction is secured with SSL encryption</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.imgCartao}>
                                <div className={styles.backCartao}>
                                    <div className={styles.topCartao}>
                                        <div className={styles.chipCartao}>
                                        </div>
                                        <div className={styles.simboloCartao}>
                                            <Image src={cardImage} className={styles.bandeiraCartao} alt="Bandeira do cartão" height={50} width={80} priority/>
                                        </div>
                                    </div>
                                    <div className={styles.dadosPessoa}>
                                        <span>{cardNumber || "0000 0000 0000 0000"}</span>
                                        <span>{cardName || "NOME DO TITULAR"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className={styles.footer}></footer>
        </div>
    );
}