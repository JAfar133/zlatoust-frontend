import React from 'react';
import Sermons from "@/components/body/sections/sermone/Sermons";
import ContentPage from "../ContentPage";

const Page = () => {
    return <ContentPage Component={Sermons} pageLimit={5} />;
};

export default Page;
