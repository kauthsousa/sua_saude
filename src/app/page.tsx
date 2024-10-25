"use client"
// import Image from "next/image";
import styles from "./page.module.css";

import MenuDeslogado from "./components/menusuperior_deslogado";

export default function Home() {
  return (
    <div className={styles.page}>
      <header><MenuDeslogado/></header>
      <main className={styles.main}>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
