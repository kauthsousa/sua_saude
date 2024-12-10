import React, { useEffect, useState } from "react";
import styles from "../page.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Calendario = () => {
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

    return (
        <div className={styles.calendarDisponibilidade}>
            <div className={styles.calendarTopDisponibilidade}>
                <div className={styles.navigationDisponibilidade}>
                    <button onClick={() => changeMonth(-1)}>
                        <FaArrowLeft />
                    </button>
                </div>
                <span className={styles.titleCalendarDisponibilidade}>
                    {monthNames[month]} {year}
                </span>
                <div className={styles.navigationDisponibilidade}>
                    <button onClick={() => changeMonth(1)}>
                        <FaArrowRight />
                    </button>
                </div>
            </div>

            <div className={styles.semanaDisponibilidade}>
                <ul>
                    <li>SEG</li>
                    <li>TER</li>
                    <li>QUA</li>
                    <li>QUI</li>
                    <li>SEX</li>
                    <li>SÁB</li>
                    <li>DOM</li>
                </ul>
            </div>

            <div className={styles.daysGridDisponibilidade}>
                {daysInMonth.map((day, index) => (
                    <div
                        key={index}
                        className={`${styles.dayDisponibilidade} ${day === null ? styles.disabledDayDisponibilidade : day === selectedDay ? styles.selectedDayDisponibilidade : ""
                            }`}
                        onClick={day ? () => handleDayClick(day) : undefined} // Só permite clique em dias válidos
                    >
                        {day || ""}
                    </div>
                ))}
            </div>

            {selectedDay && (
                <p className={styles.selectedDateDisponibilidade} hidden>
                    Data selecionada: {selectedDay}/{month + 1}/{year}
                </p>
            )}
        </div>
    );
};

export default Calendario;
