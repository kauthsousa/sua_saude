"use client";
import Image from "next/image";
import styles from "../page.module.css";

export default function Pesquisa() {
    return (
        <form>
            <div className={styles.inputs_pesquisa}>
                <select aria-label="Pesquisar por especialidade">
                    <option disabled selected>Pesquisar por especialidade</option>
                    <option>Cardiologista</option>
                    <option>Ortopedista</option>
                    <option>Esp. 1</option>
                    <option>Esp. 2</option>
                    <option>Esp. 3</option>
                </select>
                <input
                    type="text"
                    placeholder="Pesquisar por Cidade"
                    aria-label="Pesquise por cidade"
                />
                <button type="submit">Pesquisar
                    <Image className={styles.lupa} src="/images/lupa.png" alt="Ícone de Pesquisar" width={240} height={120} />
                </button>
            </div>
        </form>
    );
}