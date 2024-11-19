import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./../page.module.css"

const Carrossel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };

    const especialidades = [
        { title: 'Nutricionista', image: '/images/especialidade_1.png' },
        { title: 'Ortopedista', image: '/images/especialidade_2.png' },
        { title: 'Fisioterapeuta', image: '/images/especialidade_3.png' },
        { title: 'Dentista', image: '/images/especialidade_4.png' },
        { title: 'Ginecologista', image: '/images/especialidade_5.png' },
        { title: 'Urologista', image: '/images/especialidade_6.png' },
        { title: 'Ultrassonografia', image: '/images/especialidade_7.png' },
        { title: 'Cardiologista', image: '/images/especialidade_8.png' },
        { title: 'Pediatra', image: '/images/especialidade_9.png' },
    ];

    return (
        <div className={styles.carousel_container}>
            <button className={`${styles.arrow_button} ${styles.arrow_left}`}>
                &#9664;
            </button>
            <Slider {...settings}>
                {especialidades.map((especialidade, index) => (
                    <div key={index} className={styles.carousel_card}>
                        <img src={especialidade.image} alt={especialidade.title} className={styles.carousel_image} />
                        <p className={styles.carousel_title}>{especialidade.title}</p>
                    </div>
                ))}
            </Slider>
            <button className={`${styles.arrow_button} ${styles.arrow_right}`}>
                &#9654;
            </button>
        </div>

    );
};

export default Carrossel;
