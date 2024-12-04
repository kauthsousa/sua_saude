import React from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Estilos básicos do calendário
import styles from "../page.module.css";

const ModalVerificarDisponibilidade = ({ isOpen, onClose, profissional }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalVerificarDisponibilidadeOverlay}>
      <div className={styles.modalVerificarDisponibilidadeContainer}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.modalVerificarDisponibilidadeContent}>
          <img
            src={profissional.imagem}
            alt={profissional.nome}
            className={styles.profileImage}
          />
          <div className={styles.profissionalInfo}>
            <h3 className={styles.profissionalName}>{profissional.nome}</h3>
            <div className={styles.stars}>
              {"⭐".repeat(5)} {/* Exemplo de estrelas */}
            </div>
          </div>
          <div className={styles.calendarContainer}>
            <ReactCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalVerificarDisponibilidade;
