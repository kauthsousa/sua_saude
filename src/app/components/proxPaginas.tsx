"use client"

import styles from "./../page.module.css";
import React, { useState } from "react";

export default function ProxPaginas() {

    const [activePage, setActivePage] = useState<number>(1);

    const handlePageClick = (pageNumber: number) => {
        setActivePage(pageNumber);
    };

    return (
        <div className={styles.nextPages}>
                {[1, 2, 3].map((page) => (
                    <button
                        key={page}
                        className={`${styles.nPagina} ${activePage === page ? styles.active : ""}`}
                        onClick={() => handlePageClick(page)}
                    >
                        {page}
                    </button>
                ))}
            </div>
    )
}