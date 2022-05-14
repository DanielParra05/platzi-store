import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('products/filter')
  getProductFilter(): string {
    return `This is a filter`;
  }

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string): string {
    return `product ${productId}`;
  }

  @Get('categories/:id/products/:productId')
  getCategories(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ) {
    return `productID: ${productId} / id: ${id}`;
  }

  @Get('products')
  getProducts(
    @Query('brand') brand: string,
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
  ) {
    return `products: limit=> ${limit} / offset => ${offset} / brand => ${brand}`;
  }
}
