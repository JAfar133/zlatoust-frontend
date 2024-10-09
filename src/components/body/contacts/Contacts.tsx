import React from 'react';

import styles from './Contacts.module.scss'
import Image from "next/image";

const Contacts = () => {
    return (
        <div className={styles.section}>
            <div className={styles.contacts}>
                <div className={styles.main}>
                    <div className={styles.icon}>
                        <Image src={"/images/church.svg"} alt={"Иконка храма"} width={50} height={50}/>
                        <div>Адрес храма</div>
                    </div>

                    <div className={styles.contactsMain}>
                        <div>Ялта</div>
                        <div>ул. Толстого, 10</div>
                        <div className={styles.link}>
                            <a href="mailto:zlatoust.hram@mail.ru">zlatoust.hram@mail.ru</a>
                        </div>
                        <div className={styles.link}>
                            <a href="https://t.me/Jalta_Zlat">Телеграм</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.map}>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A32e1f53eeb301db19f9a3f6da59af251c751c1b329f5447ee57ae1b1580c954c&amp;source=constructor"
                width="100%" height="300" frameBorder="0"></iframe>
            </div>
        </div>
    );
};

export default Contacts;