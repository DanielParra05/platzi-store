import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    //@Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private tasks: any[],
    private config: ConfigService,
  ) {}

  getHello(): string {
    console.log(this.config.get('API_KEY'));
    console.log(this.config.get('DATABASE_NAME'));
    return `Hello World!`;
  }
}
