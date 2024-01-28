import { AmpsConnectionInfo } from '@avam/amps-api';

export interface AmpsTopic {
  type: 'json' | 'nvfix' | 'xml' | 'fix' | 'bson' | 'msgpack';
  name: string;
}
export interface AmpsQueryConfig {
  name: string;
  method: string;
  connection: AmpsConnectionInfo;
  topic: AmpsTopic;
  options?: string;
  viewport?: DataViewportSettings;
  sort?: string;
}
export interface DataViewportSettings {
  batchSize: number;
}

export interface AmpsConsoleState {
  busy?: boolean;
  ampsConfigs: AmpsConnectionInfo[];
  selectedConfig?: AmpsConnectionInfo;
}

export enum AmpsConsoleAction {
  Update = 'update',
}

export interface Query {
  name: string;
  topic: string;
  options?: string;
  viewport?: DataViewportSettings;
  sort?: string;
  token?: string;
  user?: string;
}

export const AMPS_QUERY_METHODS: Array<{ key: string; value: string }> = [
  { key: 'sow', value: 'Query' },
  { key: 'subscribe', value: 'Subscribe' },
  { key: 'sow_and_subscribe', value: 'Sow and Subscribe' },
  { key: 'sow_and_delta_subscribe', value: 'Sow and Delta Subscribe' },
];
