import { IAppender, ILogEvent } from './types';

export class IndexDBAppender implements IAppender {
  private db?: IDBDatabase;
  private _store?: IDBObjectStore;
  constructor(private dbname: string) {
    this.initialize(dbname);
  }

  append(event: ILogEvent): void {
    this._store?.add(event);
  }

  private initialize(name: string): void {
    const request = indexedDB.open(name, 1);
    request.onerror = (event) => {
      console.error('Error opening database', event);
    };
    request.onsuccess = (event) => {
      console.log('Database opened', event);
    };
    request.onupgradeneeded = (event) => {
      const db = request.result;
      const store = db.createObjectStore('logs', {
        autoIncrement: true,
      });
      store.createIndex('scope', 'scope');
      store.createIndex('level', 'level');
      this.db = db;
    };
  }
}
