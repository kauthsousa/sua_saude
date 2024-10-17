"use client"
// import Image from "next/image";
import styles from "./page.module.css";

import Menu from "./components/menu";

export default function Home() {
  return (
    <div className={styles.page}>
      <header><Menu/></header>
      <main className={styles.main}>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
