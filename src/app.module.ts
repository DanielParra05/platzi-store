import { Module } from '@nestjs/common';
import { CategoriesController } from './products/controllers/categories.controller';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [UsersModule, ProductsModule],
  controllers: [CategoriesController],
  providers: [],
})
export class AppModule {}
