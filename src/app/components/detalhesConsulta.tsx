import React from "react";
import styles from "../page.module.css";
import Image from "next/image";

interface DetalhesProps {
  nome_profissional: string; // Nome do profissional ou local
  nome_paciente: string; // Nome do paciente
  status_paciente: string; // Status do paciente (ex.: "Confirmado", "Cancelado")
  idade: string; // Idade do paciente
  data_consulta: string; // Data da consulta
  hora_consulta: string; // Hora da consulta
  modalidade: string; // Modalidade da consulta (ex.: "Presencial", "Online")
  valor_total: string;
  valor_unitario: string;
  forma_pagamento:string;
}

interface VerDetalhesProps {
    onClose: () => void; // Define a função para fechar o modal
    detalhes: DetalhesProps; // Propriedades dos detalhes da consulta
}

const DetalhesConsulta: React.FC<VerDetalhesProps> = ({ onClose, detalhes }) => {
  const {
    nome_profissional,
    nome_paciente,
    status_paciente,
    idade,
    data_consulta,
    hora_consulta,
    modalidade,
    valor_total,
    valor_unitario,
    forma_pagamento
  } = detalhes; // Remove os valores padrão para evitar conflitos
  
  return (
    <div className={styles.modalOverlay}>
      <div className={`${styles.verDetalhes} ${styles.modalCadastro}`}>
        {/* Botão de Fechar */}
        <Image
          src="/images/close.png"
          alt="Botão de Fechar"
          onClick={onClose}
          className={styles.btnCloseDep}
          width={30}
          height={30}
          priority
        />

        {/* Título do modal */}
        <span className={`${styles.titulo_novoDep} ${styles.titulo_modalCadastro}`}>
          Detalhes da Consulta
        </span>

        {/* Conteúdo do modal */}
        <div className={styles.interiorDetalhes}>
            <div className={styles.detalhesContent}>
            <div>
                <label htmlFor="profissional-nome">Profissional: </label>
                <input
                    id="profissional-nome"
                    type="text"
                    value={nome_profissional}
                    className={`${styles.inputCompromisso} ${styles.inputDetalhes}`}
                    readOnly
                    aria-readonly="true"
                />
            </div>
            <div>
                <label htmlFor="paciente-nome">Paciente: </label>
                <input
                    id="paciente-nome"
                    type="text"
                    value={nome_paciente}
                    className={`${styles.inputCompromisso} ${styles.inputDetalhes}`}
                    readOnly
                    aria-readonly="true"
                />
            </div>
            <div>
                <label htmlFor="status">Status: </label>
                <input
                    id="status"
                    type="text"
                    value={status_paciente}
                    className={`${styles.inputCompromisso} ${styles.inputDetalhes}`}
                    readOnly
                    aria-readonly="true"
                />
            </div>
            <div>
                <label htmlFor="idade_paciente">Idade: </label>
                <input
                    id="idade_paciente"
                    type="text"
                    value={idade}
                    className={`${styles.inputCompromisso} ${styles.inputDetalhes}`}
                    readOnly
                    aria-readonly="true"
                />
            </div>
            <div>
                <label htmlFor="data-consulta">Data: </label>
                <input
                    id="data-consulta"
                    type="text"
                    value={data_consulta}
                    className={`${styles.inputCompromisso} ${styles.inputDetalhes}`}
                    readOnly
                    aria-readonly="true"
                />
            </div>
            <div>
                <label htmlFor="hora-consulta">Hora: </label>
                <input
                    id="hora-consulta"
                    type="text"
                    value={hora_consulta}
                    className={`${styles.inputCompromisso} ${styles.inputDetalhes}`}
                    readOnly
                    aria-readonly="true"
                />
            </div>
            <div>
                <label htmlFor="modalidade">Modalidade: </label>
                <input
                    id="modalidade"
                    type="text"
                    value={modalidade}
                    className={`${styles.inputCompromisso} ${styles.inputDetalhes}`}
                    readOnly
                    aria-readonly="true"
                />
            </div>
            </div>
            <div className={styles.valorConsulta}>
                <div className={styles.vProduto}>
                    <span>R$</span>
                    <input
                        id="valor-unitario"
                        type="text"
                        value={valor_unitario}
                        className={`${styles.inputCompromisso} ${styles.inputDetalhes}`}
                        readOnly
                        aria-readonly="true"
                    />
                </div>
                <div className={styles.adicionais}>
                    <span>1x{/* QUANTIDADE */}</span>
                    <span>---------------</span>
                </div>
                <div className={styles.vProduto}>
                    <span>R$</span>
                    <input
                        id="valor-total"
                        type="text"
                        value={valor_total}
                        className={`${styles.inputCompromisso} ${styles.inputDetalhes}`}
                        readOnly
                        aria-readonly="true"
                    />
                </div>
                <div className={styles.formaPagamento}>
                    <input
                        id="forma-pagamento"
                        type="text"
                        value={forma_pagamento}
                        className={`${styles.inputCompromisso} ${styles.inputDetalhes}`}
                        readOnly
                        aria-readonly="true"
                    />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DetalhesConsulta;