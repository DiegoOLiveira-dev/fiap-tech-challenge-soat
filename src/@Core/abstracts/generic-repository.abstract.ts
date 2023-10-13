export abstract class IGenericRepository<T> {
    abstract getAll(): Promise<T[]>;
    abstract create(item: T): Promise<T>;
    abstract createMany(item: T[]): any
  
}