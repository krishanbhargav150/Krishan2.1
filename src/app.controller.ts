import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  getHello() {
    return "Hii krishan, welcome back"
  }
}
