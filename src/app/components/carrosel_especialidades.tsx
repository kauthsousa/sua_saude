"use client"

import styles from "../page.module.css";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Carousel: React.FC = () => {
    const carouselRef = useRef<HTMLDivElement | null>(null);

    const items = [
        { id: 1, label: "Nutricionista", image: "/images/especialidade_2.png" },
        { id: 2, label: "Ortopedista", image: "/images/especialidade_3.png" },
        { id: 3, label: "Fisioterapeuta", image: "/images/especialidade_4.png" },
        { id: 4, label: "Dentista", image: "/images/especialidade_5.png" },
        { id: 5, label: "Ginecologista", image: "/images/especialidade_6.png" },
        { id: 6, label: "Urologista", image: "/images/especialidade_7.png" },
        { id: 7, label: "Ultrassonografia", image: "/images/especialidade_8.png" },
        { id: 8, label: "Cardiologista", image: "/images/especialidade_9.png" },
        { id: 9, label: "Pediatra", image: "/images/especialidade_10.png" },
    ];

    const clonedItems = [...items, ...items, ...items];

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -300,
                behavior: "smooth",
            });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: 300,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const carousel = carouselRef.current;

        const handleScroll = () => {
            if (!carousel) return;

            const maxScrollLeft = carousel.scrollWidth / 3; // 1/3 da largura total
            const currentScroll = carousel.scrollLeft;

            if (currentScroll >= maxScrollLeft * 2) {
                carousel.scrollLeft = maxScrollLeft;
            } else if (currentScroll <= 0) {
                carousel.scrollLeft = maxScrollLeft;
            }
        };

        if (carousel) {
            carousel.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (carousel) {
                carousel.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            const maxScrollLeft = carousel.scrollWidth / 3;
            carousel.scrollLeft = maxScrollLeft;
        }
    }, []);

    return (
        <div className={styles.carouselContainer}>
            <button className={styles.navButton} onClick={scrollLeft}>
                <FaArrowLeft />
            </button>
            <div className={styles.carouselTrack} ref={carouselRef}>
                {clonedItems.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <img src={item.image} alt={item.label} className={styles.image} />
                        <h4 className={styles.label}>{item.label}</h4>
                    </div>
                ))}
            </div>
            <button className={styles.navButton} onClick={scrollRight}>
                <FaArrowRight />
            </button>
        </div>
    );
};

export default Carousel;