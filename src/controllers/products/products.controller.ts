import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('filter')
  getProductFilter(): string {
    return `This is a filter`;
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string): string {
    return `product ${productId}`;
  }

  @Get()
  getProducts(
    @Query('brand') brand: string,
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
  ) {
    return `products: limit=> ${limit} / offset => ${offset} / brand => ${brand}`;
  }
}
