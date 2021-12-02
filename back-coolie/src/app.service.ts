import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return [1,2,3,4];
  }
}
