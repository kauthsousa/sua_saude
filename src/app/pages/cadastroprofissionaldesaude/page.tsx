"use client"
import React from "react";
import styles from "../../page.module.css";
import MenuDeslogado from "../../components/menusuperior_deslogado";
import Image from "next/image";

export default function CadastroProfissional() {
    return (
        <div className={styles.pagina_cadastro} role="main">
            <header aria-label="Menu Principal">
                <MenuDeslogado />
            </header>
            <main className={`${styles.main} ${styles.telaCadastro}`}>
                <Image
                    src="/images/ÍconesCadastro.png"
                    className={styles.imgCadastro}
                    alt="Ícones representativos"
                    width={500}
                    height={300}
                    priority
                />
                <div className={styles.modalCadastro} role="form" aria-labelledby="tituloCadastro">
                    <span id="tituloCadastro" className={styles.titulo_modalCadastro}>Finalize seu cadastro</span>
                    <div className={styles.camposCadastro}>
                        <form>
                            <div className={`${styles.geral} ${styles.select}`}>
                                <label htmlFor="tipoCodigo" aria-hidden="true" hidden>Tipo de código profissional</label>
                                <select id="tipoCodigo" className={`${styles.geral}`} required aria-required="true">
                                    <option value="" selected disabled>Tipo de código profissional</option>
                                    <option value="codigoEtica">Código de Ética Profissional</option>
                                    <option value="codigoIdentificacao">Código de Identificação Profissional</option>
                                    <option value="codigoFiscal">Código Fiscal de Atividade Profissional (CFAP)</option>
                                    <option value="codigoCnes">Código de Autorização para Profissionais da Saúde (CNES)</option>
                                    <option value="codigoRegistro">Código de Registro Profissional</option>
                                    <option value="codigoCbo">Código de Classificação de Funções Profissionais (CBO)</option>
                                    <option value="codigoPrevidenciario">Código para Recolhimento Previdenciário</option>
                                </select>
                            </div>
                            <label htmlFor="codigoProfissional" aria-hidden="true" hidden>Código profissional</label>
                            <input
                                type="text"
                                id="codigoProfissional"
                                placeholder="Código profissional"
                                maxLength={50}
                                className={`${styles.geral} ${styles.codProf}`}
                                required
                                aria-required="true"
                                aria-label="Código Profissional"
                            />
                            <div className={styles.checkAgendaAberta}>
                                <input type="checkbox" id="agendaAberta" value="Agenda aberta" />
                                <label htmlFor="agendaAberta">Estou com a agenda aberta</label>
                            </div>
                            <button type="submit">Cadastrar</button>
                        </form>
                    </div>
                </div>
            </main>
            <footer className={styles.footer} aria-label="Rodapé">
            </footer>
        </div>
    );
}
