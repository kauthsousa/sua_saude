import React from "react";
import Image from "next/image";
import styles from "../page.module.css";
import CalendarioAgendarConsulta from "./calendarioAgendarConsulta";
import { BiColor } from "react-icons/bi";

const AgendarConsulta = ({ isOpen, onClose, profissional }) => {
  if (!isOpen) return null;

  const specialDay =[
    {day: 1, month: 1, year: 2025, color: "teal"}
  ]

  return (
    <div className={styles.verificarDisponibilidadeOverlay}>
      <div className={`${styles.verificarDisponibilidadeContainer} ${styles.modal_agendarConsulta}`}>
        <p className={`${styles.verificarDisponibilidadeTitle} ${styles.titleAgendar}`}>{profissional.titulo}</p>
        <form>
          <div className={styles.containerAgendar}>   
              <button
              className={styles.verificarDisponibilidadeCloseButton}
              onClick={onClose}
              >
                <Image className={`${styles.btnCloseDep} ${styles.closeAgendar}`} src="/images/close.png" alt="Fechar Modal" width={24} height={24} />
              </button>
              <div className={`${styles.verificarDisponibilidadeContent} ${styles.agendarContent}`}>
                <div className={styles.conteudoAgendar}>
                  <div className={`${styles.verificarDisponibilidadeLeft} ${styles.leftAgendar}`}>
                      <Image
                        src={profissional.imagem}
                        alt={profissional.nome}
                        className={`${styles.verificarDisponibilidadeProfileImage}`}
                        width={500} height={500}
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
                      <h3 className={`${styles.verificarDisponibilidadeName} ${styles.nomeProfissional}`}>{profissional.nome}</h3>
                      <div className={`${styles.verificarDisponibilidadeCalendarContainer} ${styles.containerAgendarConsulta}`}>
                        <CalendarioAgendarConsulta specialDays={specialDay}/>
                        
                        <div className={`${styles.inputs_pesquisa} ${styles.inputsAgendar}`}>
                          <div className={`${styles.apparenceSelect} ${styles.selectAgendar}`}>
                              <select aria-label="Pesquisar por especialidade">
                                  <option disabled selected>Paciente</option>
                                  <option>Daniel Soares</option>
                                  <option>Karine Silva Sousa</option>
                              </select>
                          </div>
                          <div className={`${styles.apparenceSelect} ${styles.selectAgendar}`}>
                              <select aria-label="Pesquisar por especialidade">
                                  <option disabled selected>Horário</option>
                                  <option>9:00</option>
                                  <option>10:00</option>
                                  <option>14:00</option>
                              </select>
                          </div>
                        </div>
                        
                      </div>
                  </div>
                </div> 
              </div>
                  
          </div>
          <div className={styles.btnAgendar}>
            <button type="submit" className={`${styles.btnConsulta} ${styles.btnAgendarConsulta}`}>
              Concluir
            </button>
          </div>
        </form>  
      </div>
    </div>
  );
};

export default AgendarConsulta;
