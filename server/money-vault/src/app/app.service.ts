import { Injectable } from '@nestjs/common';
import { DataService } from './data.service';

@Injectable()
export class AppService {
  constructor(private readonly dataService: DataService) {}

  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  async downloadAllAssets(): Promise<number> {
    return this.dataService.downloadAllAssets();
  }
}
