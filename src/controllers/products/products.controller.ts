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
} from '@nestjs/common';

import { ProductsService } from 'src/services/products/products.service';
@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get('filter')
  getProductFilter(): string {
    return `This is a filter`;
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId') productId: string) {
    return this.productService.findOne(+productId);
  }

  @Get()
  getProducts(
    @Query('brand') brand: string,
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
  ) {
    return this.productService.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: any) {
    return this.productService.create(payload);
  }

  @Put(':id')
  update(@Body() payload: any, @Param('id') id: number) {
    return this.productService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: 'accion de eliminar',
      id: id,
    };
  }
}
