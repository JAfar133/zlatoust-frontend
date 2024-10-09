'use client'

import React from 'react';
import { useParams } from 'next/navigation';

const Announcement = () => {
    const { id } = useParams();

    return (
        <div className={'pt-[130px]'}>
            <h1>Обьявление с ID: {id}</h1>
        </div>
    );
};

export default Announcement;
