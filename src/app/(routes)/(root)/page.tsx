import React from 'react';
import ImageSection from "@/components/image-section/ImageSection";
import Contacts from "@/components/body/contacts/Contacts";
import Announcements from "@/components/body/sections/announcement/Announcement";
import News from "@/components/body/sections/news/News";
import Sermons from "@/components/body/sections/sermone/Sermons";



const Page = () => {
    return (
        <div>
            <ImageSection/>
            <Contacts/>
            <Announcements limit={3} pageLimit={3} allButton={true}/>
            <News limit={3} pageLimit={3} allButton={true} bgColor={'#F5F3F1'}/>
            <Sermons limit={3} pageLimit={3} allButton={true}/>
        </div>
    );
};

export default Page;