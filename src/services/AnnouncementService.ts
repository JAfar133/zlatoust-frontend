import { $authHost, $host } from "@/api/api";
import { AnnouncementType } from "@/components/body/sections/announcement/Announcement";
import { IContentService } from './IContentService';
import { AxiosResponse } from 'axios';
import {Cards} from "@/tests/testData";
import {PageEnums} from "@/constants/constants";
import {isTest} from "@/config/config";

export default class AnnouncementService implements IContentService<AnnouncementType> {

    private getEndpointPath(): string {
        return 'announcement'
    }

    public async getAll(page: number, limit: number): Promise<AnnouncementType[]> {
        console.log(page, limit)
        if (isTest) {
            return Cards[PageEnums.ANNOUNCEMENTS]
        }
        const response: AxiosResponse<AnnouncementType[]> = await $host.get(`/${this.getEndpointPath()}/get?page=${page}&limit=${limit}`);
        return response.data;
    }

    public async addById(id: number): Promise<AnnouncementType> {
        const response: AxiosResponse<AnnouncementType> = await $host.get(`/${this.getEndpointPath()}/get/${id}`);
        return response.data;
    }

    public async update(id: number, news: AnnouncementType): Promise<void> {
        await $authHost.post(`/${this.getEndpointPath()}/update/${id}`, { news });
    }

    public async add(news: AnnouncementType): Promise<void> {
        await $authHost.post(`/${this.getEndpointPath()}/save`, { news });
    }

    public async delete(id: number): Promise<void> {
        await $authHost.delete(`/${this.getEndpointPath()}/delete/${id}`);
    }

    public async count(): Promise<number> {
        const response: AxiosResponse<number> = await $host.get(`/${this.getEndpointPath()}/count`);
        return response.data;
    }
}
