import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';
import { Product } from '../../entities/product.entitie';

@Injectable()
export class ProductsService {
  private counter = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Some description',
      price: 23000,
      stock: 2,
      image: 'some',
    },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    const foundProduct = this.products.find((product) => product.id === id);
    if (!foundProduct) {
      throw new NotFoundException(`El producto con id ${id} no existe nea`);
    }
    return foundProduct;
  }

  create(payload: CreateProductDto) {
    this.counter = this.counter + 1;
    const newProduct: Product = {
      id: this.counter++,
      ...payload,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);

    if (product) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return payload;
    }
    return null;
  }

  remove(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`El producto con id ${id} no existe nea`);
    }

    this.products.splice(index, 1);
    return true;
  }
}
