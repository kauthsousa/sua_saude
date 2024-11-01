"use client"
// import Image from "next/image";
import React, {useState} from "react";
import styles from "../../page.module.css";
import MenuDeslogado from "../../components/menusuperior_deslogado";
import Image from "next/image";

export default function CadastroProfissional (){
    return (
        <div className={styles.pagina_cadastro}>
            <header><MenuDeslogado/></header>
            <main className={`${styles.main} ${styles.telaCadastro}`}> 
                <Image src="/images/ÍconesCadastro.png" className={styles.imgCadastro} alt="Ícones representativos" width={500} height={300} priority/>
                <div className={styles.modalCadastro}>
                    <span className={styles.titulo_modalCadastro}>Finalize seu cadastro</span>
                    <div className={styles.camposCadastro}>
                        <form>
                            {/*<input type="text" placeholder="Tipo de código profissional" maxLength={50} className={`${styles.geral}`} required/>*/}
                            <div className={`${styles.geral} ${styles.select}`}>
                                <select className={`${styles.geral}`}>
                                    <option selected disabled>Tipo de código profissional</option>
                                    <option value="codigoEtica">Código de Ética Profissional</option>
                                    <option value="codigoIdentificacao">Código de Identificação Profissional</option>
                                    <option value="codigoFiscal">Código Fiscal de Atividade Profissional (CFAP)</option>
                                    <option value="codigoCnes">Código de Autorização para Profissionais da Saúde (CNES)</option>
                                    <option value="codigoRegistro">Código de Registro Profissional</option>
                                    <option value="codigoCbo">Código de Classificação de Funções Profissionais (CBO)</option>
                                    <option value="codigoPrevidenciario">Código para Recolhimento Previdenciário</option>
                                </select>
                            </div>
                            <input type="text" placeholder="Código profissional" maxLength={50} className={`${styles.geral}`} required/>
                            <div className={styles.checkAgendaAberta}><input type="checkbox" value="Agenda aberta"/><span>Estou com a agenda aberta</span></div>
                            <button type="submit">Cadastrar</button>
                        </form>
                    </div>
                </div>
            </main>
            <footer className={styles.footer}>
            </footer>
        </div>
    );
}