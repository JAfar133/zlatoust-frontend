import {IContentService} from "@/services/IContentService";
import NewsService from "@/services/NewsService";
import AnnouncementService from "@/services/AnnouncementService";
import SermoneService from "@/services/SermoneService";
import {PageEnums} from "@/constants/constants";
import {CardType} from "@/components/body/ui/card/Card";

export const getService = (type: string): IContentService<CardType> => {
    switch (type) {
        case PageEnums.NEWS:
            return new NewsService();
        case PageEnums.ANNOUNCEMENTS:
            return new AnnouncementService();
        case PageEnums.SERMONS:
            return new SermoneService();
        default:
            throw new Error('Unknown page');
    }
};