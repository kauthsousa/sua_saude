"use client"
import styles from "../../page.module.css";
import MenuLogado from "../../components/menusuperior_logado";
import Calendar from "../../components/calendario";
import Compromissos from "../../components/compromissos";
import Mapa from "@/app/components/mapa";
{/*import Carousel from "@/app/components/carrosel_especialidades";*/}

export default function HomePaciente() {
  return (
    <div className={styles.pagina_homePaciente}>
      <header><MenuLogado/></header>
      <main className={`${styles.main}`}> 
        <div className={`${styles.home_paciente}`}></div>
        <div className={styles.especialidadesH}></div>
        {/*<div><Carousel/></div>*/}
        <div><Calendar/></div>
        <div><Compromissos/></div>
        <div><Mapa/></div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
