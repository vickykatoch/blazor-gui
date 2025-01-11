export enum LogLevel {
  ALL = 0,
  DEBUG = 1,
  INFO = 2,
  WARN = 3,
  ERROR = 4,
}

export interface ILogger {
  readonly isDebugEnabled: boolean;
  debug(message: string, ...args: any[]): void;
  log(message: string, ...args: any[]): void;
  info(message: string, ...args: any[]): void;
  warn(message: string, ...args: any[]): void;
  error(message: string, ...args: any[]): void;
}
export interface ILogEvent {
  timestamp: Date;
  scope: string;
  level: LogLevel;
  message: string;
  args?: any[];
}
export interface IAppender {
  append(event: ILogEvent): void;
}
