import React from 'react';

interface ContentPageProps {
    Component: React.ElementType; // Динамический компонент для рендеринга
    pageLimit?: number;
}

const ContentPage: React.FC<ContentPageProps> = ({Component, pageLimit = 5}) => {
    return (
        <div className={'pt-[130px]'}>
            <Component pageLimit={pageLimit}/>
        </div>
    );
};

export default ContentPage;
