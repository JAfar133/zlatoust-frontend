import React from 'react';
import Header, {HeaderElement} from "@/components/header/Header";
import ImageSection from "@/components/image-section/ImageSection";
import PropovedSection from "@/components/body/propoved/PropovedSection";

const topHeader: HeaderElement[] = [
    { name: 'Новости', path: '/news' },
    { name: 'Проповедь', path: '/sermon' },
    { name: 'Фотогалерея', path: '/gallery' },
    { name: 'Контакты', path: '/contacts' },
]

const bottomHeader: HeaderElement[] = [
    { name: 'История прихода', path: '/history' },
    { name: 'Расписание Богослужений', path: '/schedule' },
    { name: 'Вопрос священнику', path: '/faq' },
    { name: 'Воскресная школа', path: 'http://olgaschool.ortox.ru' },
]

const Page = () => {
    return (
        <div>
            <Header topHeaders={topHeader} bottomHeaders={bottomHeader}/>
            <ImageSection />
            <PropovedSection />
        </div>
    );
};

export default Page;