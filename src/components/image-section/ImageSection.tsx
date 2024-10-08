import React from 'react';
import styles from './Body.module.scss';
import { Search } from 'lucide-react';

const ImageSection = () => {
    return (
        <div className={styles.bodyBackground}>
            <div className={styles.overlay}>
                <div className={styles.searchContainer}>
                    <Search className={styles.searchIcon} />
                    <input className={styles.searchInput} type="text" placeholder="Поиск по сайту..." />
                </div>
            </div>
        </div>
    );
};

export default ImageSection;
