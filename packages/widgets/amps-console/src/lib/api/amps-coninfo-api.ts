import { AmpsConnectionInfo } from '@avam/amps-api';
import { HttpApi } from '@avam/core-types';
import { API_HEADERSS } from './constants';

export class AmpsConnectionInfoApi implements HttpApi<AmpsConnectionInfo> {
  constructor(private serviceUrl: string) {}

  fetchAll(): Promise<AmpsConnectionInfo[]> {
    return fetch(`${this.serviceUrl}amps/con-info/all`, {
      headers: API_HEADERSS,
    }).then((r) => r.json());
  }
  fetchById<IdType>(id: IdType): Promise<AmpsConnectionInfo | undefined> {
    throw new Error('Method not implemented.');
  }
  fetchByFilter<FilterType>(filter: FilterType): Promise<AmpsConnectionInfo[]> {
    throw new Error('Method not implemented.');
  }
  create(payload: AmpsConnectionInfo): Promise<AmpsConnectionInfo> {
    throw new Error('Method not implemented.');
  }
  update(payload: Partial<AmpsConnectionInfo>): Promise<AmpsConnectionInfo> {
    throw new Error('Method not implemented.');
  }
  delete<IdType>(id: IdType): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
