"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "../../page.module.css";
import MenuDeslogado from "../../components/menusuperior_deslogado";
import Rodape from "../../components/rodape";

export default function Home() {

    return (
        <div className={styles.page}>
            <header><MenuDeslogado /></header>
            <main className={styles.telaCadastro}>
                <div></div>
            </main>
            <Rodape></Rodape>
        </div>
    );
}
