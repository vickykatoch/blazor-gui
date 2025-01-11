import { IndexDBAppender } from './IndexDBAppender';
import { IAppender, ILogEvent } from './types';

class LogAppendersManager {
  private appenders = new Map<string, IAppender>();

  init() {
    this.appenders.set('IndexDBAppender', new IndexDBAppender('logging'));
  }
  addAppender(name: string, appender: IAppender) {
    this.appenders.set(name, appender);
  }
  removeAppender(name: string) {
    this.appenders.delete(name);
  }
  log(logEntry: ILogEvent) {
    this.appenders.forEach((appender) => appender.append(logEntry));
  }
}
const logAppendersManager = new LogAppendersManager();
export default logAppendersManager;
