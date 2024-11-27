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
      <div className={`${styles.modalCadastro} ${styles.avaliarConsulta}`}>
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
        <div className={styles.detalhesContent}>
            <div className={styles.topAvaliar}>
                <div>
                    <div>
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
                    <div>
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
                        <Image
                        key={index}
                        src={ativa ? "/images/estrela.png" : "/images/estrelaCinza.png"} // Imagens das estrelas
                        alt={`Estrela ${index + 1}`}
                        width={600}
                        height={600}
                        onClick={() => alternarEstrela(index)} // Alterna as estrelas ao clicar
                        className={styles.estrelaImg}
                        priority
                        />
                    ))}
                </div>
            </div>
            <div>
                <textarea className={styles.opinião} placeholder="Escreva aqui sua opinião..."></textarea>
                <button className={styles.btnAvaliar}>Enviar opinião</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AvaliarConsulta;