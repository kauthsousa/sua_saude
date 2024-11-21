"use client"
// import Image from "next/image";
import styles from "../../page.module.css";
import Image from "next/image";
import MenuLogado from "../../components/menusuperior_logado";
import Calendar from "../../components/calendario";
import Compromissos from "../../components/compromissos";

export default function HomePaciente() {
  return (
    <div className={styles.pagina_homePaciente}>
      <header><MenuLogado/></header>
      <main className={`${styles.main}`}> 
        <div className={`${styles.home_paciente}`}></div>{/*<Image src="/images/bgHomePaciente.png" className={styles.bgHomePaciente} alt="Foto de perfil" width={3500} height={500} priority/>   */}
        <div className={styles.especialidadesH}></div>
        <div>{/* CARROSSEL */}</div>
        <div><Calendar/></div>
        <div><Compromissos/></div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
