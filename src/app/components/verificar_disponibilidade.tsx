import React from "react";
import Image from "next/image";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; 
import styles from "../page.module.css";

const ModalVerificarDisponibilidade = ({ isOpen, onClose, profissional }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.verificarDisponibilidadeOverlay}>
      <div className={styles.verificarDisponibilidadeContainer}>
        <button
          className={styles.verificarDisponibilidadeCloseButton}
          onClick={onClose}
        >
          <Image src="/images/close.png" alt="Fechar Modal" width={24} height={24} />
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
            <ReactCalendar className={styles.customCalendar} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalVerificarDisponibilidade;
