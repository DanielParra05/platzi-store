import { Body, Controller, Post } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }
}
