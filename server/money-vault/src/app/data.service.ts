import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class DataService {
  private readonly pool = new Pool({
    user: 'bkatoch',
    host: 'ubn-bk',
    database: 'MoneyVault',
    password: 'Katoch@123',
    port: 5432,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  });

  async getBalance(): Promise<number> {
    debugger;
    return await this.pool.query('SELECT NOW()').then((res) => res.rows[0].now);
  }
}
