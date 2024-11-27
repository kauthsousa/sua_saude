import React from "react";
import styles from "../page.module.css";

export default function CardProfissional({ profissionais }) {
    return (
        <div    >
            {profissionais.map((profissional) => (
                <div key={profissional.id} className={styles.card}>
                    <img
                        src={profissional.imagem}
                        alt={`Foto de ${profissional.nome}`}
                        className={styles.imagem}
                    />
                    <div className={styles.informacoes}>
                        <h3 className={styles.nome}>{profissional.nome}</h3>
                        <p className={styles.especialidade}>{profissional.especialidade}</p>
                        <p className={styles.endereco}>{profissional.endereco}</p>
                        <p className={styles.avaliacoes}>
                            {profissional.avaliacoes} avaliações{" "}
                            <a href="#comentarios" className={styles.linkComentarios}>
                                (ver comentários)
                            </a>
                        </p>
                        <p className={styles.distancia}>{profissional.distancia} de distância de você</p>
                    </div>
                    <button className={styles.botao}>Verificar disponibilidade</button>
                </div>
            ))}
        </div>
    );
}
