export interface AmpsConfig {
  name: string;
  url: string;
  topic: string;
  options?: string;
  viewport?: DataViewportSettings;
  sort?: string;
  token?: string;
  user?: string;
}
export interface DataViewportSettings {
  batchSize: number;
}

export interface AmpsConsoleState {
  busy?: boolean;
  ampsConfigs: AmpsConfig[];
  selectedConfig?: AmpsConfig;
}

export enum AmpsConsoleAction {
  Update = 'update',
}
