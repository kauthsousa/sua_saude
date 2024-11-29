"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../../page.module.css";
import MenuDeslogado from "../../components/menusuperior_deslogado";
import Carousel from "../../components/carrosel_especialidades";
import Rodape from "../../components/rodape";
import Mapa from '../../components/mapa';
import ProxPaginas from "@/app/components/proxPaginas";
import Pesquisa from "@/app/components/inputs_pesquisa";
import ListaFavoritos from "@/app/components/listafavoritos";


export default function PesquisaExterno() {

    const profissionais = [
        {
            nome: "Ana Moreira - Nutricionista Clínica e Esportiva",
            endereco: "Rua dos Prazeres, 18, Centro - Cidade do Norte - CE",
            avaliacoes: 12,
            distancia: "9 km",
            imagem: "/images/profissional_foto1.png",
        },
        {
            nome: "Amália Andréia - Nutricionista Materno Infantil",
            endereco: "Rua dos Prazeres, 18, Centro - Cidade do Norte - CE",
            avaliacoes: 12,
            distancia: "9 km",
            imagem: "/images/profissional_foto2.png",
        },
        {
            nome: "João Albuquerque - Nutrição Comportamental",
            endereco: "Rua dos Prazeres, 18, Centro - Cidade do Norte - CE",
            avaliacoes: 12,
            distancia: "9 km",
            imagem: "/images/profissional_foto3.png",
        },
        {
            nome: "Joana Patrícia - Nutrição Coletiva e Hospitalar",
            endereco: "Rua dos Prazeres, 18, Centro - Cidade do Norte - CE",
            avaliacoes: 12,
            distancia: "9 km",
            imagem: "/images/profissional_foto4.png",
        }
    ];
    

    const handleAgendarConsulta = (profissional: any) => {
        alert(`Você clicou em Agendar Consulta para: ${profissional.nome}`);
    };

    return (
        <div className={styles.page}>
            <header><MenuDeslogado /></header>
            <main className={styles.pesquisaEXT}>

                {/* BANNER TOPO */}
                <div>
                    <Image className={styles.top} src="/images/top.png" alt={""} layout="responsive" width={1500} height={300} />
                    <Image className={styles.icone_central} src="/images/locale.png" alt={""} width={80} height={80} />
                    <Pesquisa/>
                    {/* <span className={`${styles.titulo_modalConfiguracoes} ${styles.tituloFav}`}>Especialidades &gt; Nutricionista </span> */}
                </div>


                    {/* LISTA PROFISSIONAIS */}
                    <div className={`${styles.lista} ${styles.containerFav}`}>
                        {profissionais.map((profissional, index) => (
                            <ListaFavoritos
                                key={index}
                                profissional={profissional}
                                botaoTexto="Agendar Consulta"
                                onBotaoClick={handleAgendarConsulta}
                            />
                        ))}

                        <ProxPaginas/>
                    </div>

                    {/* ESPECIALIDADES */}
                    <div>
                        <Carousel />
                    </div>

                    {/* LOCALIZAÇÃO */}
                    <div className={styles.mapa}>
                        <Mapa />
                    </div>
            </main>

            <Rodape />
        </div>
    );
}
