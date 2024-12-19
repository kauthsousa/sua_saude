"use client"
import React, {useState} from "react";
import styles from "../../page.module.css";
import MenuLogado from "../../components/menusuperior_logado";
import Calendar from "../../components/calendario";
import Compromissos from "../../components/compromissos";
import Mapa from "@/app/components/mapa";
import Carousel from "@/app/components/carrosel_especialidades";
import Cancelamento from "@/app/components/cancelamento";
import Rodape from "@/app/components/rodape";

export default function HomePaciente() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Função de confirmação do cancelamento
  const handleConfirmCancel = () => {
    console.log("Consulta cancelada com sucesso!"); // Exemplo de lógica
    closeModal(); // Fecha o modal após confirmar
  };

  const specialDays = [
    {day:30, month: 11, year: 2024, color: "teal", description: "Consulta marcada"}
  ]

  return (
    <div className={styles.pagina_homePaciente}>
      <header><MenuLogado/></header>
      <main className={`${styles.main}`}> 
        <div className={`${styles.home_paciente}`}></div>
        <div className={styles.especialidadesH}></div>
        <div><Carousel/></div>
        <div><Calendar specialDays={specialDays}/></div>
        <div>
          <Compromissos
            nome="Dra. Cleide Albuquerque - Ginecologista"
            data="30/11/2024"
            hora="10:00"
            botoes={[
              {
                texto: "Cancelar atendimento",
                onClick: () => {console.log("Cancelado");
                  openModal();
                },
                classeEstilo: styles.btnCancelar,
                ariaLabel: "Cancelar atendimento",
              },
              {
                texto: "Confirmar atendimento",
                onClick: () => console.log("Confirmado"),
                classeEstilo: styles.btnConfirmar,
                ariaLabel: "Confirmar atendimento",
              },
              ]}
            />
          </div>
        <div><Mapa/></div>
      </main>

      {isModalOpen && (
          <Cancelamento 
              onClose={closeModal} 
              onConfirm={handleConfirmCancel} // Passa a lógica para o botão "Sim"
          />
      )}

      <footer className={styles.footer}>
        <Rodape/>
      </footer>
    </div>
  );
}
