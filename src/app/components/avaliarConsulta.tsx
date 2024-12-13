import React, {useState} from "react";
import styles from "../page.module.css";
import Image from "next/image";

interface AvaliacaoProps {
  nome_profissional: string; // Nome do profissional ou local
  data_consulta: string; // Data da consulta
}

interface AvaliarConsultaProps {
    onClose: () => void; // Define a função para fechar o modal
    avaliacao: AvaliacaoProps; // Propriedades dos detalhes da consulta
}

const AvaliarConsulta: React.FC<AvaliarConsultaProps> = ({ onClose, avaliacao }) => {
  const {
    nome_profissional,
    data_consulta,
  } = avaliacao; // Remove os valores padrão para evitar conflitos

  const [estrelas, setEstrelas] = useState([false, false, false, false, false]); // Estado para controlar cada estrela

  const alternarEstrela = (index: number) => {
    const novasEstrelas = estrelas.map((_, i) => i <= index); // Marca todas as anteriores
    setEstrelas(novasEstrelas);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={`${styles.avaliarConsulta}`}>
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
          Avaliar Consulta
        </span>

        {/* Conteúdo do modal */}
        <form>
        <div className={`${styles.conteudoAvaliacao}`}>
            <div className={styles.topAvaliar}>
                <div className={styles.dadosAvaliacao}>
                    <div className={styles.dadoAvaliado}>
                        <label htmlFor="profissional-nome">Profissional: </label>
                        <input
                            id="profissional-nome"
                            type="text"
                            value={nome_profissional}
                            className={`${styles.inputCompromisso} ${styles.inputAvaliacao}`}
                            readOnly
                            aria-readonly="true"
                        />
                    </div>
                    <div className={styles.dadoAvaliado}>
                        <label htmlFor="data-consulta">Data: </label>
                        <input
                            id="data-consulta"
                            type="text"
                            value={data_consulta}
                            className={`${styles.inputCompromisso} ${styles.inputAvaliacao}`}
                            readOnly
                            aria-readonly="true"
                        />
                    </div>
                </div>
                <div className={styles.estrela}>
                  {estrelas.map((ativa, index) => (
                    <div
                      key={index}
                      onClick={() => alternarEstrela(index)}
                      className={`${styles.estrelaItem} ${ativa ? styles.estrelaAtiva : styles.estrelaInativa}`}
                    >
                      <Image
                        src="/images/estrela.svg"
                        alt={`Estrela ${index + 1}`}
                        width={600}
                        height={600}
                        className={styles.estrelaImg}
                        priority
                      />
                    </div>
                  ))}
                </div>
            </div>
            <div className={styles.escreveropiniao}>
                <textarea className={styles.opinião} placeholder="Escreva aqui sua opinião..." maxLength={300}></textarea>
                <button className={`${styles.btnAvaliar} ${styles.btn}`}>Enviar opinião</button>
            </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default AvaliarConsulta;