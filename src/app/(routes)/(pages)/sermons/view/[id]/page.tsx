'use client'

import React from 'react';
import { useParams } from 'next/navigation';

const Sermone = () => {
    const { id } = useParams();

    return (
        <div className={'pt-[130px]'}>
            <h1>Проповедь с ID: {id}</h1>
        </div>
    );
};

export default Sermone;
