'use client'

import React from 'react';
import { useParams } from 'next/navigation';

const News = () => {
    const { id } = useParams();

    return (
        <div className={'pt-[130px]'}>
            <h1>Новость с ID: {id}</h1>
        </div>
    );
};

export default News;
