"use client"
// import Image from "next/image";
import styles from "../../page.module.css";

import MenuDeslogado from "../../components/menusuperior_deslogado";
import Image from "next/image";

export default function CadastroUser() {
  return (
    <div className={styles.pagina_cadastro}>
      <header><MenuDeslogado/></header>
      <main className={`${styles.main} ${styles.telaCadastro}`}> 
        <Image src="/images/ÍconesCadastro.png" className={styles.imgCadastro} alt="Ícones representativos" width={500} height={300} priority/>
        <div className={styles.modalCadastro}>
          <span className={styles.titulo_modalCadastro}>Cadastre-se</span>
          <div className={styles.camposCadastro}>
            <form>
              <input type="text" placeholder="Nome Completo" className={styles.geral}/>
              <input type="email" placeholder="Email" className={styles.geral}/>
              <input type="text" placeholder="CPF" className={styles.geral}/>
              <input type="tel" pattern="[0-9]{11,11}" placeholder="Telefone" className={styles.geral}/>
              <input type="date" className={`${styles.intermediario} ${styles.geral} ${styles.data}`}/>
              <input type="text" placeholder="CEP" className={`${styles.pequeno} ${styles.geral}`}/>
              <input type="text" placeholder="Cidade" className={`${styles.intermediario} ${styles.geral}`}/>
              <input type="text" placeholder="Bairro" className={`${styles.pequeno} ${styles.geral}`}/>
              <input type="text" placeholder="Logradouro" className={`${styles.intermediario} ${styles.geral}`}/>
              <input type="number" placeholder="Número" className={`${styles.pequeno} ${styles.geral}`}/>
              <input type="password" placeholder="Senha" className={styles.geral}/>
              <input type="password" placeholder="Confirmar senha" className={styles.geral}/>
              <div><input type="checkbox" value="Profissional da Saúde" className={styles.checkProf}/><span>Sou um profissional da Saúde</span></div>
              <input type="checkbox" value="Aceita os Termos" className={styles.checkTermo}/><span>Aceito os termos de uso do Sua Saúde</span>
              <button type="submit">Cadastrar</button>
            </form>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
