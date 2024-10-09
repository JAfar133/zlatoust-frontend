'use client';

import React, { useEffect, useState } from 'react';
import Card, { CardType } from "@/components/body/ui/card/Card";
import styles from "./Card.module.scss";
import { getService } from "@/services/ServiceFactory";
import { PageEnums } from "@/constants/constants";

interface CardsProps {
    page: PageEnums;
    pageLimit?: number;
    limit?: number;
}

const Cards: React.FC<CardsProps> = ({ page, pageLimit = 10, limit }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [cards, setCards] = useState<CardType[]>([]);

    const totalItems = limit ? Math.min(cards.length, limit) : cards.length;
    const totalPages = Math.ceil(totalItems / pageLimit);

    useEffect(() => {
        const fetchData = async () => {
            const service = getService(page);
            const data = await service.getAll(currentPage, pageLimit);
            const limitedData = limit ? data.slice(0, limit) : data;
            setCards(limitedData);
        };

        fetchData();
    }, [page, currentPage, pageLimit, limit]);

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToPage = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const goToFirstPage = () => {
        setCurrentPage(1);
    };

    const goToLastPage = () => {
        setCurrentPage(totalPages);
    };

    const startIndex = (currentPage - 1) * pageLimit;
    const displayedCards = cards.slice(startIndex, startIndex + pageLimit);

    const renderPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    className={currentPage === i ? styles.activePage : ''}
                    onClick={() => goToPage(i)}
                >
                    {i}
                </button>
            );
        }
        return pages;
    };

    return (
        <div className={styles.container}>
            <div className={styles.list}>
                {displayedCards.map((card) => (
                    <div key={card.id}>
                        <Card card={card} path={page} />
                    </div>
                ))}
            </div>

            {totalPages > 1 && (
                <div className={styles.pagination}>
                    <button onClick={goToFirstPage} disabled={currentPage === 1}>
                        В начало
                    </button>
                    <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                        &#8592;
                    </button>

                    {renderPageNumbers()}

                    <button onClick={goToNextPage} disabled={currentPage === totalPages}>
                        &#8594;
                    </button>
                    <button onClick={goToLastPage} disabled={currentPage === totalPages}>
                        В конец
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cards;
