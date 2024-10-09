import {$authHost, $host} from "@/api/api";
import {NewsType} from "@/components/body/sections/news/News";
import {AxiosResponse} from "axios";
import {IContentService} from "@/services/IContentService";
import {isTest} from "@/config/config";
import {Cards} from "@/tests/testData";
import {PageEnums} from "@/constants/constants";

export default class NewsService implements IContentService<NewsType> {

    private getEndpointPath(): string {
        return 'news'
    }

    public async getAll(page: number, limit: number): Promise<NewsType[]> {
        if (isTest) {
            return Cards[PageEnums.NEWS]
        }
        const response: AxiosResponse<NewsType[]> = await $host.get(`/${this.getEndpointPath()}/get?page=${page}&limit=${limit}`);
        return response.data;
    }

    public async addById(id: number): Promise<NewsType> {
        const response: AxiosResponse<NewsType> = await $host.get(`/${this.getEndpointPath()}/get/${id}`);
        return response.data;
    }

    public async update(id: number, news: NewsType): Promise<void> {
        await $authHost.post(`/${this.getEndpointPath()}/update/${id}`, { news });
    }

    public async add(news: NewsType): Promise<void> {
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