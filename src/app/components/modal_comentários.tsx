import React from 'react';
import Image from 'next/image';
import styles from '../page.module.css';

const ModalComentarios = ({ comentarios, onClose }) => {
  return (
    <div className={styles.modalComentariosOverlay}>
      <div className={styles.modalComentariosContainer}>
        <button className={styles.modalComentariosCloseButton} onClick={onClose}>
          <Image className={styles.btnClose} src={'/images/close.png'} alt={'Fechar Modal'} width={80} height={80}/>
        </button>
        <h2 className={styles.modalComentariosTitle}>Comentários ({comentarios.length})</h2>
        <div className={styles.modalComentariosContent}>
          {comentarios.map((comentario, index) => (
            <div key={index} className={styles.modalComentariosComment}>
              <h4 className={styles.modalComentariosAuthor}>{comentario.nome}</h4>
              <p className={styles.modalComentariosText}>{comentario.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalComentarios;
