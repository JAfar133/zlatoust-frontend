import React from 'react';
import Announcements from "@/components/body/sections/announcement/Announcement";
import ContentPage from "../ContentPage";

const Page = () => {
    return <ContentPage Component={Announcements} pageLimit={5} />;
};

export default Page;
