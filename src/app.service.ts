import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Worldssss!';
  }

  getHello2(): string {
    return 'Hello Worldssss 2!';
  }
}
