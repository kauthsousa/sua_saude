import React from "react";
import styles from "../page.module.css";

interface BotaoProps {
  texto: string; // Texto exibido no botão
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // Função executada ao clicar no botão
  classeEstilo?: string; // Classe de estilo adicional para o botão
  ariaLabel?: string; // Texto para acessibilidade (aria-label)
}

interface CompromissosProps {
  nome: string; // Nome do profissional ou local
  data: string; // Data no formato dd/mm/yyyy
  hora: string; // Hora no formato HH:mm:ss
  botoes: BotaoProps[]; // Lista de botões com suas propriedades
}

const Compromissos: React.FC<CompromissosProps> = ({
  nome,
  data,
  hora,
  botoes,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div
        className={styles.compromisso}
        role="region"
        aria-labelledby="compromisso-titulo"
      >
        <div className={styles.dadosCompromisso}>
          {/* Campo de Nome */}
          <input
            id="compromisso-nome"
            type="text"
            value={nome}
            className={`${styles.inputCompromisso} ${styles.inputEspecificoCompromisso}`}
            readOnly
            aria-readonly="true"
          />

          {/* Data e Hora */}
          <span aria-label={`Data e horário do compromisso: ${data} às ${hora}`}>
            {data} | {hora}
          </span>

          {/* Botões dinâmicos */}
          <div className={styles.btnCompromisso}>
            {botoes.map((botao, index) => (
              <button
                key={index}
                className={botao.classeEstilo || styles.defaultButton}
                onClick={(e) => {
                  e.preventDefault(); // Impede o comportamento padrão do botão
                  botao.onClick(e); // Chama a função passada para o botão
                }}
                aria-label={botao.ariaLabel || botao.texto}
                type="button" // Garante que o botão não seja do tipo submit
              >
                {botao.texto}
              </button>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Compromissos;