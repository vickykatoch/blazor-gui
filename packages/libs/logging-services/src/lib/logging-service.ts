import { Logger } from './logger';
import { ILogger, LogLevel } from './types';
import LogWriter from './log-appenders-manager';
class LoggingService {
  private _logLevel: LogLevel = LogLevel.INFO;

  init(logLevel: LogLevel) {
    this._logLevel = logLevel;
    LogWriter.init();
  }

  setLogLevel(logLevel: LogLevel) {
    this._logLevel = logLevel;
  }

  getLogger(scope: string, logLevel?: LogLevel): ILogger {
    return new Logger(logLevel || this._logLevel, scope);
  }
}

export const loggingService = new LoggingService();
