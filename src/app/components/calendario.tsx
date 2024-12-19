import React, { useEffect, useState } from "react";
import styles from "../page.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface SpecialDay {
  day: number;
  month: number; // Agora inclui o mês também
  year: number; // Agora inclui o ano
  color: string; // Cor ou classe para estilização
  description?: string; // Descrição opcional
}

interface CalendarioProps {
  specialDays?: SpecialDay[]; // Prop para dias especiais
}

const Calendario: React.FC<CalendarioProps> = ({ specialDays = [] }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState<(number | null)[]>([]);
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const generateCalendar = (month: number, year: number) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const totalDays = lastDay.getDate();
    const firstDayOfWeek = firstDay.getDay();
    const daysArray: (number | null)[] = [];

    const startDay = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

    for (let i = 0; i < startDay; i++) {
      daysArray.push(null); // Dias vazios para alinhar o início do mês
    }

    for (let i = 1; i <= totalDays; i++) {
      daysArray.push(i);
    }

    setDaysInMonth(daysArray);
  };

  useEffect(() => {
    generateCalendar(month, year);
  }, [month, year]);  

  const changeMonth = (increment: number) => {
    let newMonth = month + increment;
    let newYear = year;

    if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    } else if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    }

    setMonth(newMonth);
    setYear(newYear);
    setSelectedDay(null); // Resetar o dia selecionado ao mudar o mês
  };

  const handleDayClick = (day: number | null) => {
    if (day) {
      setSelectedDay(day);
      console.log(`Dia selecionado: ${day}/${month + 1}/${year}`);
    }
  };

  const isSpecialDay = (day: number | null): SpecialDay | null => {
    if (!day) return null;

    return specialDays.find(specialDay => 
      specialDay.day === day && 
      specialDay.month === month + 1 && // Comparando mês (de 0 a 11)
      specialDay.year === year // Comparando o ano
    ) || null;
  };

  const renderLegend = () => {
    // Filtra as descrições únicas de dias especiais
    const uniqueDescriptions = Array.from(
      new Set(specialDays.map((event) => event.description))
    );
  
    return (
      <div className={styles.calendarLegend}>
        {uniqueDescriptions.map((desc) => {
          const color = specialDays.find((event) => event.description === desc)?.color;
          return (
            <div key={desc} className={styles.legendItem}>
              <div
                style={{ backgroundColor: color }}
                className={styles.legendDot}
              ></div>
              {desc}
            </div>
          );
        })}
      </div>
    );
  };
  

  return (
    <div className={styles.calendar}>
      <div className={styles.calendarTop}>
        <div className={styles.navigation}>
          <button onClick={() => changeMonth(-1)}>
            <FaArrowLeft />
          </button>
        </div>
        <span className={styles.titleCalendar}>
          {monthNames[month]} {year}
        </span>
        <div className={styles.navigation}>
          <button onClick={() => changeMonth(1)}>
            <FaArrowRight />
          </button>
        </div>
      </div>

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
      </div>

      <div className={styles.daysGrid}>
        {daysInMonth.map((day, index) => {
          const specialDay = isSpecialDay(day);
          return (
            <div
              key={index}
              className={`${styles.day} ${
                day === selectedDay ? styles.selectedDay : ""
              }`}
              style={{
                border: specialDay ? `3px solid ${specialDay.color}` : "none",
              }}
              onClick={day ? () => handleDayClick(day) : undefined}
            >
              {day}
            </div>
          );
        })}
      </div>

      {renderLegend()}

    </div>
  );
};

export default Calendario;