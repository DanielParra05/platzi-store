import { Injectable } from '@nestjs/common';
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
    return this.products.find((product) => {
      return product.id === id;
    });
  }

  create(payload: any) {
    this.counter = this.counter + 1;
    const newProduct: Product = {
      id: this.counter++,
      ...payload,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    const product = this.findOne(id);

    if (product) {
      console.log(2);
      const index = this.products.findIndex((item) => item.id == id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return payload;
    }
    return null;
  }

  remove(id: number) {
    const newArray = this.products.filter((item) => item.id != id);
    this.products = newArray;
  }
}
