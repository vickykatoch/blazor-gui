import { Injectable } from '@nestjs/common';
import { DataService } from './data.service';

@Injectable()
export class AppService {
  constructor(private readonly dataService: DataService) {}

  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  async downloadAllAssets(): Promise<void> {
    const bal = this.dataService.getBalance();
    console.log(bal);
    // fetch('https://api.livecoinwatch.com/coins/list')
    //   .then((response) => response.json())
    //   .then((data) => {});
    return Promise.resolve();
  }
}
