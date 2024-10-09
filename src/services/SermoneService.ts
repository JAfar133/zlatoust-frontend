import {$authHost, $host} from "@/api/api";
import {IContentService} from "@/services/IContentService";
import {AxiosResponse} from "axios";
import {SermonsType} from "@/components/body/sections/sermone/Sermons";
import {isTest} from "@/config/config";
import {Cards} from "@/tests/testData";
import {PageEnums} from "@/constants/constants";

export default class SermoneService implements IContentService<SermonsType> {

    private getEndpointPath(): string {
        return 'sermons'
    }

    public async getAll(page: number, limit: number): Promise<SermonsType[]> {
        if (isTest) {
            return Cards[PageEnums.SERMONS]
        }
        const response: AxiosResponse<SermonsType[]> = await $host.get(`/${this.getEndpointPath()}/get?page=${page}&limit=${limit}`);
        return response.data;
    }

    public async addById(id: number): Promise<SermonsType> {
        const response: AxiosResponse<SermonsType> = await $host.get(`/${this.getEndpointPath()}/get/${id}`);
        return response.data;
    }

    public async update(id: number, news: SermonsType): Promise<void> {
        await $authHost.post(`/${this.getEndpointPath()}/update/${id}`, { news });
    }

    public async add(news: SermonsType): Promise<void> {
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