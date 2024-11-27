"use client";

import Image from "next/image";
import styles from "../../page.module.css";
import Rodape from "@/app/components/rodape";
import FAQ from "@/app/components/faq";
import MenuDeslogado from "@/app/components/menusuperior_deslogado";

export default function CentralDeAjuda() {
    return (
        <div className={styles.page}>
            <header><MenuDeslogado /></header>
            <main className={styles.main}>

                {/* BANNER TOPO */}
                <div className={styles.banner_central}>
                    <Image className={styles.top} src="/images/top.png" alt={""} layout="responsive" width={1500} height={300} />
                    <Image className={styles.icone_central} src="/images/suporte.png" alt={""} width={80} height={80} />
                    <h1 className={styles.titulo}>
                        No que podemos te ajudar?
                    </h1>

                    {/* INPUT DÚVIDAS */}
                    <div className={styles.input_duvidas}>
                        <input
                            type="text"
                            placeholder="Digite sua dúvida!"
                            aria-label="Digite sua dúvida!"
                        />
                        <button>Pesquisar
                            <Image className={styles.lupa} src="/images/lupa.png" alt="Pesquisar" width={240} height={120} />
                        </button>
                    </div>

                    {/* PERGUNTAS FREQUENTES */}
                    <div className={styles.faqs}>
                        <FAQ />
                    </div>
                </div>
            </main>
            <Rodape></Rodape>
        </div>
    );
}
