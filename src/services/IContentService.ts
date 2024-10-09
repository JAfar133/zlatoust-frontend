export interface IContentService<T> {
    getAll(page: number, limit: number): Promise<T[]>;
    count():Promise<number>;
    addById(id: number): Promise<T>;
    update(id: number, data: T): Promise<void>;
    add(data: T): Promise<void>;
    delete(id: number): Promise<void>;
}
