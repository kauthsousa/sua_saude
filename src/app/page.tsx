"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Menu from "./components/menu";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <Menu />
      </header>
      <main className={styles.main}>
        <div className={styles.banner_pesquisa}>
          <Image className={styles.top} src="/images/top.png" alt={""} layout="responsive" width={1500} height={300} />
          <Image className={styles.icone_central} src="/images/locale.png" alt={""} width={80} height={80} />
          <h1 className={styles.titulo}>
            Agende sua consulta médica online.
          </h1>
          <h3 className={styles.subtitulo}>
            Atendimento personalizado
          </h3>
          <div className={styles.inputs_pesquisa}>
            <select aria-label="Pesquisar por especialidade">
              <option disabled selected>Pesquisar por especialidade</option>
              <option>Cardiologista</option>
              <option>Ortopedista</option>
              <option>Bartolomeu do Pneu</option>
            </select>
            <input
              type="text"
              placeholder="Pesquisar por Cidade"
              aria-label="Pesquise por cidade"
            />
            <button>Pesquisar
              <Image className={styles.lupa} src="/images/lupa.png" alt={""} width={80} height={80} />
            </button>
          </div>

        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
