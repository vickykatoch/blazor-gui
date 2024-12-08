import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class DataService {
  private readonly pool = new Pool({
    user: 'bkatoch',
    host: '192.168.68.148',
    database: 'money-vault',
    password: 'Katoch@123',
    port: 5432,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  });

  async getBalance(): Promise<number> {
    debugger;
    const query = 'SELECT NOW()';
    const result = await this.pool.query(query);
    console.log(result.rows[0].now);
    return 0;
  }
}
