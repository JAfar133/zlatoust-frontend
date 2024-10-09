import React from 'react';
import News from "@/components/body/sections/news/News";
import ContentPage from "../ContentPage";

const Page = () => {
    return <ContentPage Component={News} pageLimit={5} />;
};

export default Page;
