import { HttpStatus, Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('assets/all')
  async downloadAllPrices(@Res() response: Response) {
    try {
      const result = await this.appService.downloadAllAssets();

      console.log(result);
      response
        .status(200)
        .json({ message: 'All crypto assets downloaded successfully', result });
    } catch (error) {
      debugger;
      response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: error.message });
    }
  }

  @Get('prices/:symbol')
  getLatestPrices(@Param('symbol') symbol: string): { message: string } {
    return { message: symbol };
  }
}
