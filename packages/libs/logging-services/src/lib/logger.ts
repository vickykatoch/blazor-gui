import { ILogEvent, ILogger, LogLevel } from './types';
import LogWriter from './log-appenders-manager';

export class Logger implements ILogger {
  constructor(
    private readonly logLevel: LogLevel,
    private readonly scope: string
  ) {}

  log(message: string, ...args: any[]): void {
    this.logLevel <= LogLevel.INFO &&
      this.logEvent(LogLevel.INFO, message, args);
  }
  info(message: string, ...args: any[]): void {
    this.logLevel <= LogLevel.INFO &&
      this.logEvent(LogLevel.INFO, message, args);
  }
  warn(message: string, ...args: any[]): void {
    this.logLevel <= LogLevel.WARN &&
      this.logEvent(LogLevel.INFO, message, args);
  }
  error(message: string, ...args: any[]): void {
    this.logLevel <= LogLevel.ERROR &&
      this.logEvent(LogLevel.INFO, message, args);
  }

  get isDebugEnabled(): boolean {
    return this.logLevel <= LogLevel.DEBUG;
  }

  debug(message: string, ...args: any[]): void {
    if (this.isDebugEnabled) {
      this.logEvent(LogLevel.DEBUG, message, args);
    }
  }

  private logEvent(level: LogLevel, message: string, args: any[]): void {
    const event: ILogEvent = {
      timestamp: new Date(),
      level,
      scope: this.scope,
      message,
      args,
    };
    LogWriter.log(event);
  }
}
