class ServiceRespository {
  private _repository = new Map<string, unknown>();

  register<T>(name: string, serviceInstance: T) {
    if (this._repository.has(name)) {
      console.warn(`Service [${name}] already exists in the repository`);
      return;
    }
    this._repository.set(name, serviceInstance);
  }
  get<T>(name: string): T | undefined {
    return this._repository.get(name) as T;
  }
  unregister(name: string) {
    this._repository.delete(name);
  }
}
export default new ServiceRespository();
