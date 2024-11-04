"use client"
import React, {useState} from "react";
import styles from "../../page.module.css";
import MenuDeslogado from "../../components/menusuperior_deslogado";
import Image from "next/image";

export default function CadastroProfissional() {

    const [tipoCodigo, setTipoCodigo] = useState("");

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTipoCodigo(event.target.value);
        console.log(tipoCodigo)
    };

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
                                <select id="tipoCodigo" className={`${styles.geral} ${tipoCodigo ? styles.selectBlack : ''}`} value={tipoCodigo} onChange={handleSelectChange} required aria-required="true">
                                    <option value="" selected disabled>Tipo de código profissional</option>
                                    <option value="codigoCnes">Código de Autorização para Profissionais da Saúde (CNES)</option>
                                    <option value="codigoIdentificacaoSaude">Código de Identificação Profissional na Saúde</option>
                                    <option value="codigoRegistroConselho">Código de Registro em Conselhos Profissionais (CRM, CRO, CRP, etc.)</option>
                                    <option value="codigoCboSaude">Código de Classificação Brasileira de Ocupações na Saúde (CBO)</option>
                                    <option value="codigoPrevidenciarioSaude">Código para Recolhimento Previdenciário na Saúde</option>
                                    <option value="codigoCboMedicoGeral">Código CBO para Médico Geral (2251-10)</option>
                                    <option value="codigoCboMedicoClinico">Código CBO para Médico Clínico (2251-05)</option>
                                    <option value="codigoCboAnestesista">Código CBO para Médico Anestesista (2251-15)</option>
                                    <option value="codigoCboCardiologista">Código CBO para Médico Cardiologista (2251-20)</option>
                                    <option value="codigoCboCirurgiaoGeral">Código CBO para Médico Cirurgião Geral (2251-25)</option>
                                    <option value="codigoCboPediatra">Código CBO para Médico Pediatra (2251-30)</option>
                                    <option value="codigoCboGinecologista">Código CBO para Médico Ginecologista (2251-35)</option>
                                    <option value="codigoCboOftalmologista">Código CBO para Médico Oftalmologista (2251-40)</option>
                                    <option value="codigoCboOrtopedista">Código CBO para Médico Ortopedista (2251-45)</option>
                                    <option value="codigoCboPsiquiatra">Código CBO para Médico Psiquiatra (2251-50)</option>
                                    <option value="codigoCboDermatologista">Código CBO para Médico Dermatologista (2251-55)</option>
                                    <option value="codigoCboRadiologista">Código CBO para Médico Radiologista (2251-60)</option>
                                    <option value="codigoCboUrologista">Código CBO para Médico Urologista (2251-65)</option>
                                    <option value="codigoCboCardiologistaIntervencionista">Código CBO para Médico Cardiologista Intervencionista (2251-70)</option>
                                    <option value="codigoCboCirurgiaoPlastico">Código CBO para Médico Cirurgião Plástico (2251-75)</option>
                                    <option value="codigoCboOtorrinolaringologista">Código CBO para Médico Otorrinolaringologista (2251-80)</option>
                                    <option value="codigoCboMedicoEsportivo">Código CBO para Médico Esportivo (2251-85)</option>
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
