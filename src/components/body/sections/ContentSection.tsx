import React from 'react';
import styles from './Section.module.scss';
import Cards from "@/components/body/ui/card/Cards";
import Link from "next/link";
import { PageEnums } from "@/constants/constants";

interface ContentSectionProps {
    title: string;
    page: PageEnums;
    limit?: number;
    pageLimit?: number;
    allButton?: boolean;
    bgColor?: string;
    allButtonText: string;
}

export interface SectionProps {
    limit?: number;
    pageLimit?: number;
    allButton?: boolean;
    bgColor?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, page, limit, pageLimit, allButton, allButtonText, bgColor }) => {
    return (
        <div className={styles.section} style={{background: bgColor ? bgColor : ''}}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <h6>Наши</h6>
                    <h2>{title}</h2>
                </div>
                <Cards page={page} pageLimit={pageLimit} limit={limit} />
                {allButton && (
                    <div className={styles.link}>
                        <Link href={page}>
                            {allButtonText}
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContentSection;
