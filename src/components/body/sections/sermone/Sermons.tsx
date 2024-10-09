import React from 'react';
import { PageEnums } from "@/constants/constants";
import ContentSection, {SectionProps} from "@/components/body/sections/ContentSection";

const Sermons: React.FC<SectionProps> = ({ limit, pageLimit, allButton }) => {
    return (
        <ContentSection
            title="Проповеди"
            page={PageEnums.SERMONS}
            limit={limit}
            pageLimit={pageLimit}
            allButton={allButton}
            allButtonText="Все Проповеди"
        />
    );
};

export default Sermons;
