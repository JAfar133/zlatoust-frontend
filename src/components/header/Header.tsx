'use client'

import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';
import { AlignJustify, AlignRight, Search, LogIn } from 'lucide-react';
import { Lora } from 'next/font/google';
import {cn} from "@/lib/utils";
import {PageEnums} from "@/constants/constants";

const loraItalic = Lora({
    subsets: ['latin'],
    weight: '600',
    // style: 'italic',
});
export interface HeaderElement {
    name: string;
    path: string;
}

export interface HeaderProps {
    topHeaders: HeaderElement[];
    bottomHeaders: HeaderElement[];
}

const topHeaders: HeaderElement[] = [
    {name: 'Новости', path: PageEnums.NEWS},
    {name: 'Обьявление', path: PageEnums.ANNOUNCEMENTS},
    {name: 'Проповедь', path: PageEnums.SERMONS},
    {name: 'Фотогалерея', path: '/gallery'},
    {name: 'Контакты', path: '/contacts'},
]

const bottomHeaders: HeaderElement[] = [
    {name: 'История прихода', path: '/history'},
    {name: 'Расписание Богослужений', path: '/schedule'},
    {name: 'Вопрос священнику', path: '/faq'},
    {name: 'Воскресная школа', path: 'http://olgaschool.ortox.ru'},
]

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [mergedHeaders, setMergedHeaders] = useState<HeaderElement[]>([]);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 991px)');

        const handleResize = () => {
            if (mediaQuery.matches) {
                setIsMobile(true);
                setMergedHeaders([...topHeaders, ...bottomHeaders]);
            } else {
                setIsMobile(false);
                setMergedHeaders(topHeaders);
            }
        };

        handleResize();
        mediaQuery.addEventListener('change', handleResize);

        return () => mediaQuery.removeEventListener('change', handleResize);
    }, [topHeaders, bottomHeaders]);

    return (
        <div className={cn(styles.main, loraItalic.className)}>
            <header className={styles.topHeader}>
                <nav className={styles.nav}>
                    <div className={styles.logo}>
                        <Link href="/">
                            <Image
                                src="/images/logo_pol_3.png"
                                alt="MySite Logo"
                                width={190}
                                height={70}
                            />
                        </Link>
                    </div>
                    <ul className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ''}`}>
                        {mergedHeaders.map((header) => (
                            <li key={header.path} className={styles.navItem}>
                                <Link className={styles.navLink} href={header.path}>{header.name}</Link>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.leftMenu}>
                        <div className={styles.buttons}>
                            <button>
                                <Search className={styles.icons} />
                            </button>
                            <button>
                                <LogIn className={styles.icons} />
                            </button>
                        </div>
                        <button className={styles.menuButton} onClick={toggleMenu}>
                            {isMenuOpen
                                ? <AlignRight />
                                : <AlignJustify />
                            }
                        </button>
                    </div>
                </nav>
            </header>

            {!isMobile && (
                <header className={styles.bottomHeader}>
                    <nav className={styles.nav}>
                        <ul className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ''}`}>
                            {bottomHeaders.map((header) => (
                                <li key={header.path} className={styles.navItem}>
                                    <Link className={styles.navLink} href={header.path}>{header.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </header>
            )}
        </div>
    );
};

export default Header;
