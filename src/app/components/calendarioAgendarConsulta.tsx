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

const CalendarioAgendarConsulta: React.FC<CalendarioProps> = ({ specialDays = [] }) => {
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
    

    return (
        <div className={`${styles.calendarDisponibilidade} ${styles.calendarAgendar}`} role="region" aria-labelledby="calendar-title">
            <div className={styles.calendarTopDisponibilidade}>
                <div className={`${styles.setaCalendario}`}>
                    <span onClick={() => changeMonth(-1)} aria-label="Mês anterior">
                        <FaArrowLeft />
                    </span>
                </div>
                <span className={styles.titleCalendarAgendar} id="celndar-title" role="heading" aria-level={1}>
                    {monthNames[month]} {year}
                </span>
                <div className={`${styles.setaCalendario}`}>
                    <span onClick={() => changeMonth(1)} aria-label="Próximo mês">
                        <FaArrowRight />
                    </span>
                </div>
            </div>

            <div className={styles.semanaAgendarConsulta}>
                <ul aria-label="Dias da semana" role="list">
                    <li role="listitem">SEG</li>
                    <li role="listitem">TER</li>
                    <li role="listitem">QUA</li>
                    <li role="listitem">QUI</li>
                    <li role="listitem">SEX</li>
                    <li role="listitem">SÁB</li>
                    <li role="listitem">DOM</li>
                </ul>
            </div>

            <div className={styles.daysAgendados}>
                {daysInMonth.map((day, index) => {
                    const specialDay = isSpecialDay(day);
                    return (
                    <div
                        key={index}
                        role="gridcell"
                        aria-selected={day === selectedDay}
                        aria-label={
                            day
                            ? `${day} ${monthNames[month]} ${year}` +
                                (specialDay ? ` - ${specialDay.description}` : "")
                            : undefined
                        }
                        className={`${styles.dayAgenda} ${day === selectedDay ? styles.selectedDay : ""
                            }`}
                            style={{
                                border: specialDay ? `2px solid ${specialDay.color}` : "none",
                            }}
                            onClick={day ? () => handleDayClick(day) : undefined} // Só permite clique em dias válidos
                    >
                        {day}
                    </div>
                    );
                })}
            </div>

        </div>
    );
};

export default CalendarioAgendarConsulta;
