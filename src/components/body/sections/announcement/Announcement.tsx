import React from 'react';
import { PageEnums } from "@/constants/constants";
import ContentSection, {SectionProps} from "@/components/body/sections/ContentSection";

const Announcements: React.FC<SectionProps> = ({ limit, pageLimit, allButton }) => {
    return (
        <ContentSection
            title="Объявления"
            page={PageEnums.ANNOUNCEMENTS}
            limit={limit}
            pageLimit={pageLimit}
            allButton={allButton}
            allButtonText="Все объявления"
        />
    );
};

export default Announcements;
