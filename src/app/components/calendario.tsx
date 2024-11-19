import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../page.module.css";

const Calendario = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // Estado para a data atual
  const [daysInMonth, setDaysInMonth] = useState([]); // Estado para os dias do mês
  const [month, setMonth] = useState(currentDate.getMonth()); // Mês atual
  const [year, setYear] = useState(currentDate.getFullYear()); // Ano atual

  // Lista dos meses para exibir o nome completo do mês
  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  // Função para gerar o calendário
  const generateCalendar = (month, year) => {
    const firstDay = new Date(year, month, 1); // Primeiro dia do mês
    const lastDay = new Date(year, month + 1, 0); // Último dia do mês
    const totalDays = lastDay.getDate(); // Número total de dias no mês
    const firstDayOfWeek = firstDay.getDay(); // Dia da semana do primeiro dia do mês
    const daysArray = [];

    // Ajusta o primeiro dia da semana para começar na segunda-feira (o `getDay()` retorna 0 para domingo, 1 para segunda, etc.)
    const startDay = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

    // Adiciona dias vazios antes do primeiro dia
    for (let i = 0; i < startDay; i++) {
      daysArray.push(null);
    }

    // Adiciona os dias do mês
    for (let i = 1; i <= totalDays; i++) {
      daysArray.push(i);
    }

    setDaysInMonth(daysArray); // Atualiza o estado com os dias gerados
  };

  useEffect(() => {
    generateCalendar(month, year); // Gera o calendário sempre que o mês ou ano mudar
  }, [month, year]);

  // Função para mudar o mês
  const changeMonth = (increment) => {
    const newMonth = month + increment;
    if (newMonth > 11) {
      setMonth(0);
      setYear(year + 1);
    } else if (newMonth < 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(newMonth);
    }
  };

  return (
    <div className={styles.calendar}>
      {/* Exibe o nome do mês e o ano */}
      <span className={styles.titleCalendar}>
        {monthNames[month]} {year}
      </span>
      <div className={styles.semana}>
        <ul>
          <li>SEGUNDA</li>
          <li>TERÇA</li>
          <li>QUARTA</li>
          <li>QUINTA</li>
          <li>SEXTA</li>
          <li>SÁBADO</li>
          <li>DOMINGO</li>
        </ul>

        <div className={styles.daysGrid}>
          {daysInMonth.map((day, index) => (
            <div key={index} className={styles.day}>
              {day ? day : ""}
            </div>
          ))}
        </div>

        <div className={styles.navigation}>
          {/* Botões para navegação de mês */}
          <button onClick={() => changeMonth(-1)}>&lt; Mês Anterior</button>
          <button onClick={() => changeMonth(1)}>Próximo Mês &gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Calendario;
