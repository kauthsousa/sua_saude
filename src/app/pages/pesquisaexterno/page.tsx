"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";
import MenuDeslogado from "../../components/menusuperior_deslogado";
import Carousel from "../../components/carrosel_especialidades";
import Rodape from "../../components/rodape";
import Mapa from '../../components/mapa';
import Pesquisa from "../../components/inputs_pesquisa";

export default function Home() {

    return (
        <div className={styles.page}>
            <header><MenuDeslogado /></header>
            <main className={styles.main}>

                {/* BANNER TOPO */}
                <div className={styles.banner_pesquisa}>
                    <Image className={styles.top} src="/images/top.png" alt={""} layout="responsive" width={1500} height={300} />
                    <Image className={styles.icone_central} src="/images/locale.png" alt={""} width={80} height={80} />

                    {/* INPUTS DE PESQUISA */}
                    <Pesquisa />

                    {/* LISTA PROFISSIONAIS*/}
                    <div className={styles.lista}>
                        {/* aqui ai ficar os ngc dos profissas */}
                    </div>

                    {/* ESPECIALIDADES */}
                    <div>
                        <Carousel />
                    </div>

                    {/* LOCALIZAÇÃO */}
                    <div className={styles.mapa}>
                        <Mapa />
                    </div>
                </div>
            </main>


            <Rodape></Rodape>
        </div>
    );
}
