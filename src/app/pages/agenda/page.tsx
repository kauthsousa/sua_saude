"use client"
import styles from "../../page.module.css";
import MenuLogado from "../../components/menusuperior_logado";
import Calendar from "../../components/calendario";
import Compromissos from "../../components/compromissos";
import Mapa from "@/app/components/mapa";

export default function HomePaciente() {
    return (
        <div>
            <header><MenuLogado/></header>
            <main className={styles.main}>
                <div  className={styles.agenda}></div>
                <div className={styles.divCalendario}><Calendar/></div>
                <div className={styles.consultas}>
                    <span className={styles.consultasTitle}>Consultas Marcadas</span>
                    <div className={styles.compromissoAgenda}>
                        <Compromissos
                            nome="Dra. Cleide Albuquerque - Ginecologista"
                            data="30/11/2024"
                            hora="10:00"
                            botoes={[
                            {
                                texto: "Cancelar compromisso",
                                onClick: () => console.log("Cancelado"),
                                classeEstilo: styles.btnCancelar,
                                ariaLabel: "Cancelar compromisso",
                            },
                            {
                                texto: "Confirmar compromisso",
                                onClick: () => console.log("Confirmado"),
                                classeEstilo: styles.btnConfirmar,
                                ariaLabel: "Confirmar compromisso",
                            },
                            ]}
                        />
                    </div>
                    <div>
                        <Compromissos
                            nome="Dra. Cleide Albuquerque - Ginecologista"
                            data="30/11/2024"
                            hora="10:00"
                            botoes={[
                            {
                                texto: "Cancelar compromisso",
                                onClick: () => console.log("Cancelado"),
                                classeEstilo: styles.btnCancelar,
                                ariaLabel: "Cancelar compromisso",
                            },
                            {
                                texto: "Confirmar compromisso",
                                onClick: () => console.log("Confirmado"),
                                classeEstilo: styles.btnConfirmar,
                                ariaLabel: "Confirmar compromisso",
                            },
                            ]}
                        />
                    </div>
                </div>
                <div className={styles.consultas}>
                    <span className={styles.consultasTitle}>Consultas Passadas</span>
                    <div className={styles.compromissoAgenda}>
                        <Compromissos
                            nome="Dra. Cleide Albuquerque - Ginecologista"
                            data="30/11/2024"
                            hora="10:00"
                            botoes={[
                            {
                                texto: "Ver detalhes",
                                onClick: () => console.log("Detalhes vistos"),
                                classeEstilo: styles.btnCancelar,
                                ariaLabel: "Ver detalhes do compromisso",
                            },
                            {
                                texto: "Avaliar",
                                onClick: () => console.log("Avaliado"),
                                classeEstilo: styles.btnConfirmar,
                                ariaLabel: "Avaliar compromisso",
                            },
                            ]}
                        />
                    </div>
                </div>
                <Mapa/>
            </main>
            <footer className={styles.footer}></footer>
        </div>
    );
}