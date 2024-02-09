export interface AmpsConnectionInfo {
  name: string;
  url: string | string[];
  token?: string | (() => string);
  connectionTimeout?: number;
  reconnectAttempts?: number;
  keepAlive?: boolean;
}
