import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";
import MenuClinica from "@/app/components/menusuperior_clinica";
import Carousel from "../../components/carrosel_especialidades";
import Rodape from "../../components/rodape";

export default function HomeClinica() {

  return (
    <div className={styles.page}>
      <header><MenuClinica/></header>
      <main className={`${styles.main} ${styles.telaCadastro} ${styles.telaPlanos}`}>
        <div className={styles.topPlanos}>
            <h2>Planos para todas as Clínicas!</h2>
            <h4>Escolha seu plano ideal:</h4>
        </div>
        <div className={styles.planos}>
            <div className={styles.plano}>
                <span>Plano 1</span>
            </div>
            <div className={styles.plano}>
                <span>Plano 2</span>
            </div>
            <div className={styles.plano}>
                <span>Plano 2</span>
            </div>
        </div>
      </main>
      <footer><Rodape/></footer>
    </div>
  );
}