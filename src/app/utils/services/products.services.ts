import { Injectable } from '@angular/core';
import { Product } from '../entities/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];
  checkout: Product[] = [];

  constructor() {
    const storedProd = localStorage.getItem('products');
    const storedCheck = localStorage.getItem('checkouts');
    if (storedProd) {
      this.products = JSON.parse(storedProd);
    }

    if (storedCheck) {
        this.checkout = JSON.parse(storedCheck);
    }
  }

  addProduct(product: Product) {
    this.products.push(product);
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  removeProduct(product: Product) {
    const i = this.products.indexOf(product);
    if (i >= 0) {
        this.products.splice(i, 1);
        localStorage.setItem('products', JSON.stringify(this.products));
    }
  }

  addCheckout(product: Product) {
    this.checkout.push(product);
    localStorage.setItem('checkouts', JSON.stringify(this.checkout));
  }

  removeCheckout(product: Product) {
    const i = this.checkout.indexOf(product);
    if (i >= 0) {
        this.products.splice(i, 1);
        localStorage.setItem('checkouts', JSON.stringify(this.checkout));
    }
  }
}
