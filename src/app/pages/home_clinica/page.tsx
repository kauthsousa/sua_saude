"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";
import MenuClinica from "@/app/components/menusuperior_clinica";
import Carousel from "../../components/carrosel_especialidades";
import Rodape from "../../components/rodape";
import Mapa from '../../components/mapa';
import Pesquisa from "../../components/inputs_pesquisa"

export default function HomeClinica() {

  return (
    <div className={styles.page}>
      <header><MenuClinica/></header>
      <main className={styles.main}>

        {/* BANNER TOPO */}
        <div className={styles.banner_pesquisa}>
          <Image className={styles.top} src="/images/top.png" alt={""} layout="responsive" width={1500} height={300} />
          <Image className={styles.icone_central} src="/images/locale.png" alt={""} width={80} height={80} />
          <h1 className={styles.titulo}>
            Agende sua consulta médica online.
          </h1>
          <h3 className={styles.subtitulo}>
            Atendimento personalizado
          </h3>

          {/* INPUTS DE PESQUISA */}
          <Pesquisa />

          {/* CHAMADA */}
          <div className={styles.chamada}>
            <p>Vários recursos para você e sua família!</p>
          </div>

          {/* BANNER PROPAGANDA */}
          <div className={styles.propaganda}>
            <p>Marque já a sua consulta!<br /><br />Os melhores profissionais e mais perto de você a um clique!</p>
            <Image className={styles.icones_propaganda} src="/images/iconsImage.png" alt="Ícones" width={280} height={440} />
          </div>

          {/* BOTÃO CRIAR CONTA */}
          <div className={styles.botao_criar_conta}>
            <button><Link href="/pages/cadastrouser">Criar uma conta GRÁTIS</Link></button>
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

      <footer><Rodape/></footer>
    </div>
  );
}
