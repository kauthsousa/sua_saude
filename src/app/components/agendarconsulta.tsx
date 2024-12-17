import React from "react";
import Image from "next/image";
import styles from "../page.module.css";
import CalendarioDisponibilidade from "./calendarioDisponibilidade";

/*interface Profissional {
  imagem: string;
  nome: string;
  titulo: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  profissional: Profissional;
}*/

const AgendarConsulta = ({ isOpen, onClose, profissional }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.verificarDisponibilidadeOverlay}>
      <div className={styles.verificarDisponibilidadeContainer}>
        <button
          className={styles.verificarDisponibilidadeCloseButton}
          onClick={onClose}
        >
          <Image className={styles.btnCloseDep} src="/images/close.png" alt="Fechar Modal" width={24} height={24} />
        </button>
        <div className={styles.verificarDisponibilidadeContent}>
          <div className={styles.verificarDisponibilidadeLeft}>
            <img
              src={profissional.imagem}
              alt={profissional.nome}
              className={styles.verificarDisponibilidadeProfileImage}
            />
            <div className={styles.estrelasDiv}>
              {[...Array(5)].map((_, index) => (
                <Image
                  key={index}
                  src="/images/estrela.svg"
                  alt="Estrela"
                  width={16}
                  height={16}
                  className={styles.estrelas}
                />
              ))}
            </div>
          </div>
          <div className={styles.verificarDisponibilidadeRight}>
            <h3 className={styles.verificarDisponibilidadeName}>{profissional.nome}</h3>
            <p className={styles.verificarDisponibilidadeTitle}>{profissional.titulo}</p>
            <div className={styles.verificarDisponibilidadeCalendarContainer}>
              <CalendarioDisponibilidade />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendarConsulta;
