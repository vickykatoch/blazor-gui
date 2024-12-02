import { GridApi, RowDataTransaction } from 'ag-grid-community';
import { Client, Message } from 'amps';

const URL = 'ws://localhost:9008/amps/json';
export interface PerfData {
  20: number;
  50: number;
  70: number;
  80: number;
  90: number;
  99: number;
  99.9: number;
  instanceName: string;
  publishTs: number;
  max: number;
  min: number;
  startTime: number; // Assuming startTime is also a timestamp.
  endTime: number;
  latencyUnit: 'ns'; // If latencyUnit has fixed values, you can use a literal type.
  TimeUnit: 'GMT'; // If TimeUnit has fixed values, you can use a literal type.
}

export class DataClient {
  private client?: Client;
  private _dataCache = new Map<string, PerfData>();
  private _sow = new Map<string, PerfData>();
  constructor(private gridApi: GridApi) {}

  async start() {
    this.client = new Client('GUI-CON');
    this.client.connect(URL).then((msg) => {
      console.log('Connected to AMPS : ', msg);
      this.client?.sowAndSubscribe(
        this.onMessageReceived.bind(this),
        '/sample/perf-matrix'
      );
    });
  }
  stop() {
    this.client?.disconnect();
  }

  private onMessageReceived(message: Message) {
    const { header, data } = message;
    const command = header.command();
    const transaction: RowDataTransaction<PerfData> = {
      add: [],
      update: [],
      remove: [],
    };
    console.log('Received message : ', command);
    const perfData = data as PerfData;
    switch (command) {
      case 'sow':
        perfData && this._sow.set(perfData.instanceName, perfData);
        break;
      case 'group_begin':
        this._dataCache.clear();
        this._sow.clear();
        break;
      case 'group_end':
        this._sow.forEach((value, key) => {
          this._dataCache.set(key, value);
        });
        transaction.add = Array.from(this._sow.values());
        this._sow.clear();
        break;
      default:
        if (perfData) {
          if (this._dataCache.has(perfData.instanceName)) {
            transaction.update?.push(perfData);
          } else {
            transaction.add?.push(perfData);
          }
          this._dataCache.set(perfData.instanceName, perfData);
        }
    }
    this.gridApi.applyTransaction(transaction);
  }
}
