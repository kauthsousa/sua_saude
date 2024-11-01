"use client"
// import Image from "next/image";
import React, {useState} from "react";
import InputMask from "react-input-mask";
import styles from "../../page.module.css";
import MenuDeslogado from "../../components/menusuperior_deslogado";
import Image from "next/image";

export default function CadastroUser() {
  const [inputType, setInputType] = useState<string>('text');
  const [dataNascimento, setDataNascimento] = useState<string>("");

  const handleFocus = () => {
    setInputType('date'); // Define que o calendário está aberto
  };

  const handleBlur = () => {
    setInputType('text');// Define que o calendário não está mais aberto
  };

  const obterDataMinima = (): string => {
    const hoje = new Date();
    hoje.setFullYear(hoje.getFullYear() - 18);
    return hoje.toISOString().split('T')[0]; // Formato "yyyy-mm-dd"
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Impede o envio do formulário padrão
  
    const dataParts = dataNascimento.split('-');
    const dataNascimentoDate = new Date(
      Number(dataParts[0]),
      Number(dataParts[1]) - 1,
      Number(dataParts[2])
    ); // Cria um objeto Date
    const idade = new Date().getFullYear() - dataNascimentoDate.getFullYear(); // Calcula a idade
  
    // Verifica se o usuário tem menos de 18 anos
    if (idade < 18 || (idade === 18 && dataNascimentoDate > new Date())) {
      alert("Você deve ter pelo menos 18 anos para se cadastrar.");
      return;
    }
  
    // Verifica se as senhas coincidem
    if (senha !== confirmarSenha) {
      setErroSenha('As senhas não coincidem.');
      return;
    } else {
      setErroSenha('');
    }
  
    // Se passou nas validações, exibe o alerta de sucesso
    alert("Cadastro realizado com sucesso!");
    // Continue com o envio do formulário
  };  

  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erroSenha, setErroSenha] = useState('');

  const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
  };

  const handleConfirmarSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmarSenha(e.target.value);
  };

  return (
    <div className={styles.pagina_cadastro}>
      <header><MenuDeslogado/></header>
      <main className={`${styles.main} ${styles.telaCadastro}`}> 
        <Image src="/images/ÍconesCadastro.png" className={styles.imgCadastro} alt="Ícones representativos" width={500} height={300} priority/>
        <div className={styles.modalCadastro}>
          <span className={styles.titulo_modalCadastro}>Cadastre-se</span>
          <div className={styles.camposCadastro}>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Nome Completo" className={styles.geral} maxLength={200} required/>
              <input type="email" placeholder="Email" className={styles.geral} required/>
              <InputMask mask="999.999.999-99" placeholder="CPF" className={styles.geral} required/>
              <InputMask mask="(99) 9.9999-9999" placeholder="Telefone" className={styles.geral} required/>
              <input type={inputType} max={obterDataMinima()} onChange={(e) => setDataNascimento(e.target.value)} placeholder="Data de nascimento" onFocus={handleFocus} onBlur={handleBlur} className={`${styles.intermediario} ${styles.geral} ${styles.data} ${inputType === 'date' ? styles.dateInput : ''}`} required/>
              <InputMask mask="99999-999" placeholder="CEP" className={`${styles.pequeno} ${styles.geral}`} required/>
              <input type="text" placeholder="Cidade" maxLength={50} className={`${styles.intermediario} ${styles.geral} ${styles.cidade}`} required/>
              <input type="text" placeholder="Bairro" maxLength={50} className={`${styles.pequeno} ${styles.geral}`} required/>
              <input type="text" placeholder="Logradouro" maxLength={50} className={`${styles.intermediario} ${styles.geral} ${styles.logradouro}`} required/>
              <input type="number" placeholder="Número" maxLength={7} className={`${styles.pequeno} ${styles.geral} ${styles.logradouro}`} required/>
              <input type="password" placeholder="Senha" maxLength={20} className={`${styles.geral}`} value={senha} onChange={handleSenhaChange} required/>
              <input type="password" placeholder="Confirmar senha" className={styles.geral} value={confirmarSenha} onChange={handleConfirmarSenhaChange} required/>
              {erroSenha && <p className={styles.erro}>{erroSenha}</p>}
              <div className={styles.checkProf}><input type="checkbox" value="Profissional da Saúde"/><span>Sou um profissional da Saúde</span></div>
              <div className={styles.checkTermo}><input type="checkbox" value="Aceita os Termos" required/><span>Aceito os termos de uso do Sua Saúde</span></div>
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
