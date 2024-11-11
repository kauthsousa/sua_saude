"use client";
import React, { useState } from "react";
import InputMask from "react-input-mask";
import styles from "../../page.module.css";
import MenuLogado from "../../components/menusuperior_logado";
import Image from "next/image";
import { useRouter } from 'next/router';

export default function CadastroUser() {
  const [inputType, setInputType] = useState<string>('text');
  const [dataNascimento, setDataNascimento] = useState<string>("");
  const [dataVisualizada, setDataVisualizada] = useState<string>("");
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erroSenha, setErroSenha] = useState('');

  const formatarData = (data: string): string => {
    if (!data) return "";
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
  };

  const handleFocus = () => {
    setInputType('date');
    setDataVisualizada(dataNascimento); // Para mostrar a data ISO ao abrir o calendário
  };

  const handleBlur = () => {
    setInputType('text');
    setDataVisualizada(formatarData(dataNascimento)); // Formata para dd/mm/aaaa ao sair do campo
  };

  const obterDataMinima = (): string => {
    const hoje = new Date();
    hoje.setFullYear(hoje.getFullYear() - 18);
    return hoje.toISOString().split('T')[0];
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dataParts = dataNascimento.split('/');
    const dataNascimentoDate = new Date(
      Number(dataParts[2]),
      Number(dataParts[1]) - 1,
      Number(dataParts[0])
    );
    const idade = new Date().getFullYear() - dataNascimentoDate.getFullYear();

    if (idade < 18 || (idade === 18 && dataNascimentoDate > new Date())) {
      alert("Você deve ter pelo menos 18 anos para se cadastrar.");
      return;
    }

    if (senha !== confirmarSenha) {
      setErroSenha('As senhas não coincidem.');
      return;
    } else {
      setErroSenha('');
    }

    alert("Cadastro realizado com sucesso!");

    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setDataNascimento(valor);
    setDataVisualizada(valor);
  };

  const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
  };

  const handleConfirmarSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmarSenha(e.target.value);
  };

  const handleSubmite = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Dados atualizados com sucesso!");
  }

  return (
    <div className={styles.pagina_cadastro} role="main">
      <header aria-label="Menu Principal">
        <MenuLogado />
      </header>
      <main className={`${styles.main} ${styles.telaConfiguracoes}`}>
        {/*<Image src="/images/top2.png" className={styles.imgConfiguracoes} alt="Imagem do topo da página" width={2000} height={500} priority />*/}
        <div className={`${styles.modalCadastro} ${styles.modalConfig}`} role="form" aria-labelledby="tituloCadastro">
          <span id="tituloCadastro" className={styles.titulo_modalConfiguracoes}>Configurações</span>
          <div className={`${styles.camposCadastro} ${styles.camposConfig}`}>
            <form onSubmit={handleSubmite}>
              <input type="text" placeholder="Nome Completo" className={styles.geral} maxLength={200} required aria-required="true" aria-label="Nome Completo"/>
              <input type="email" placeholder="Email" className={styles.geral} required aria-required="true" aria-label="Email"/>
              <InputMask mask="(99) 9.9999-9999" placeholder="Celular" className={styles.geral} required aria-required="true" aria-label="Celular"/>
              <InputMask mask="(99) 9.9999-9999" placeholder="Telefone" className={styles.geral} aria-label="Telefone"/>
              <input
                type={inputType}
                max={obterDataMinima()}
                value={inputType === 'text' ? dataVisualizada : dataNascimento}
                onChange={handleDataChange}
                placeholder="Data de nascimento"
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={`${styles.pequeno} ${styles.geral} ${styles.data} ${inputType === 'date' ? styles.dateInput : ''} ${styles.spaceConfig}`}
                required
                aria-required="true"
                aria-label="Data de Nascimento"
              />
              <InputMask mask="999.999.999-99" placeholder="CPF" className={`${styles.geral} ${styles.intermediarioC}`} required aria-required="true" aria-label="CPF"/>
              
              <InputMask mask="99999-999" placeholder="CEP" className={`${styles.pequeno} ${styles.geral}`} required aria-required="true" aria-label="CEP"/>
              <input type="text" placeholder="Cidade" maxLength={50} className={`${styles.intermediarioC} ${styles.geral} ${styles.cidade}`} required aria-required="true" aria-label="Cidade"/>
              <input type="text" placeholder="Logradouro" maxLength={50} className={`${styles.geral} ${styles.logradouro}`} required aria-required="true" aria-label="Logradouro"/>
              <input type="number" placeholder="Número" maxLength={7} className={`${styles.pequeno} ${styles.geral} ${styles.logradouro}`} required aria-required="true" aria-label="Número"/>
              <input type="text" placeholder="UF" className={`${styles.intermediarioC} ${styles.geral}`} required aria-required="true" aria-label="Número"/>
              <input type="text" placeholder="Bairro" maxLength={50} className={`${styles.geral} ${styles.spaceConfig}`} required aria-required="true" aria-label="Bairro"/>
              
              
              <input type="password" placeholder="Senha" maxLength={20} className={`${styles.geral}`} value={senha} onChange={handleSenhaChange} required aria-required="true" aria-label="Senha"/>
              <input type="password" placeholder="Confirmar senha" className={`${styles.geral} ${styles.spaceConfig}`} value={confirmarSenha} onChange={handleConfirmarSenhaChange} required aria-required="true" aria-label="Confirmar Senha"/>
              {erroSenha && <p className={styles.erro} role="alert">{erroSenha}</p>}
              <button type="submit">Atualizar Cadastro</button>
            </form>
          </div>
          <div className={styles.perfil}>
            <Image src="/images/perfil_foto.png" className={styles.imagem_perfil} alt="Foto de perfil" width={500} height={500} priority/>
            <button className={styles.btnFoto}>Enviar nova foto de perfil</button>
          </div>
        </div>
      </main>
      <footer className={styles.footer} aria-label="Rodapé">
      </footer>
    </div>
  );
}