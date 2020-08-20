import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { Message } from '@soundmeter/api-interfaces';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiResponse({
    description: 'Return hello message.',
  })
  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }
}
