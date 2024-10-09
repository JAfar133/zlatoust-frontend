'use client'

import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Card.module.scss";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";

export interface CardType {
    id: number;
    title: string;
    imageSrc: string;
    shortDescription: string;
    date: string;
}

export const CardShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    user: PropTypes.string,
    description: PropTypes.string
}).isRequired;

interface CardProps {
    card: CardType;
    path: string;
}

const Card: React.FC<CardProps> = ({ card, path }) => {

    const href = `/${path}/view/${card.id}`;
    const router = useRouter();
    const route = () => {
        router.push(href);
    }

    return (
        <div className={styles.card}>
            <Image
                src={card.imageSrc}
                alt={'announce image'}
                width={300}
                height={200}
                onClick={() => route()}
            />
            <div>
                <Link href={href}><h4>{card.title}</h4></Link>
                <div>{card.shortDescription}</div>
                <span>{card.date}</span>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: CardShape,
    path: PropTypes.string.isRequired,
};

export default Card;
