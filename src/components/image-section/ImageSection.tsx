'use client'

import React, { useEffect } from 'react';
import styles from './ImageSection.module.scss';
import { Search } from 'lucide-react';

const ImageSection = () => {
    useEffect(() => {
        const handleScroll = () => {
            const background = document.querySelector(`.${styles.bodyBackground}`) as HTMLElement | null;

            if (background) {
                background.style.backgroundPositionY = `${window.scrollY * 0.3}px`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.bodyBackground}>
            <div className={styles.overlay}>
                <div className={styles.title}>
                    <h1>Храм свт. Иоанна Златоуста на Поликуровском холме, г.Ялта</h1>
                    <h2>Симферопольская и Крымская Епархия, Ялтинское Благочиние</h2>
                </div>
                <div className={styles.searchContainer}>
                    <Search className={styles.searchIcon}/>
                    <input className={styles.searchInput} type="text" placeholder="Поиск по сайту..."/>
                </div>
            </div>
        </div>
    );
};

export default ImageSection;
