export interface HttpApi<T> {
  fetchAll(): Promise<T[]>;
  fetchById<IdType>(id: IdType): Promise<T | undefined>;
  fetchByFilter<FilterType>(filter: FilterType): Promise<T[]>;

  create(payload: T): Promise<T>;
  update(payload: Partial<T>): Promise<T>;
  delete<IdType>(id: IdType): Promise<void>;
}
