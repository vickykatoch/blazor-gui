import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class DataService {
  private readonly pool = new Pool({});

  async getBalance(): Promise<number> {
    debugger;
    const query = 'SELECT NOW()';
    const result = await this.pool.query(query);
    console.log(result.rows[0].now);
    return 0;
  }
}
