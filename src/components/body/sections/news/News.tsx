import React from 'react';
import { PageEnums } from "@/constants/constants";
import ContentSection, {SectionProps} from "@/components/body/sections/ContentSection";

const News: React.FC<SectionProps> = ({ limit, pageLimit, allButton, bgColor }) => {
    return (
        <ContentSection
            title="Новости"
            page={PageEnums.NEWS}
            limit={limit}
            pageLimit={pageLimit}
            allButton={allButton}
            allButtonText="Все новости"
            bgColor={bgColor}
        />
    );
};

export default News;
