import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';

import { Response } from 'express';

@Controller('products')
export class ProductsController {
  @Get('filter')
  getProductFilter(): string {
    return `This is a filter`;
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Res() response: Response, @Param('productId') productId: string) {
    response.status(200).send({ message: `product ${productId}` });
  }

  @Get()
  getProducts(
    @Query('brand') brand: string,
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
  ) {
    return `products: limit=> ${limit} / offset => ${offset} / brand => ${brand}`;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }

  @Put(':id')
  update(@Body() payload: any, @Param('id') id: number) {
    return {
      message: 'accion de actualizar',
      id: id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: 'accion de eliminar',
      id: id,
    };
  }
}
