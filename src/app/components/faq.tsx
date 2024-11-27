"use client"

import { useState } from "react";
import { useRef } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import styles from "../page.module.css";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleQuestion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const faqs = [
        { question: "Pergunta Frequente 1", answer: "Lorem ipsum dolor sit amet..." },
        { question: "Pergunta Frequente 2", answer: "Vestibulum tellus dui..." },
        { question: "Pergunta Frequente 3", answer: "Aliquam justo dolor..." },
        { question: "Pergunta Frequente 4", answer: "Phasellus eu ipsum leo..." },
        { question: "Pergunta Frequente 5", answer: "Curabitur tempus aliquet felis..." },
    ];

    const respostasRef = useRef([]);

    const toggleResposta = (index) => {
        if (activeIndex === index) {
            // Fechar resposta
            setActiveIndex(null);
        } else {
            // Abrir resposta e calcular altura
            const resposta = respostasRef.current[index];
            if (resposta) {
                resposta.style.maxHeight = `${resposta.scrollHeight}px`;
            }
            setActiveIndex(index);
        }
    };


    return (
        <div className={styles.faqs}>
            {faqs.map((faq, index) => (
                <div key={index} className={styles.pergunta}>
                    <div
                        className={styles.header}
                        onClick={() => toggleQuestion(index)}
                    >
                        <h3>{faq.question}</h3>
                        {activeIndex === index ? (
                            <SlArrowUp className={styles.icone} />
                        ) : (
                            <SlArrowDown className={styles.icone} />
                        )}
                    </div>
                    <div
                        ref={(el) => (respostasRef.current[index] = el)}
                        className={`${styles.resposta} ${activeIndex === index ? styles.expandida : ""
                            }`}
                    >
                        <p>{faq.answer}</p>
                    </div>


                </div>
            ))}
        </div>
    );
};

export default FAQ;
