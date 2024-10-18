import { Component, OnInit } from '@angular/core';
import { Product } from '../../utils/entities/product';
import { ProductComponent } from '../../components/product/product.component';
import { ProductService } from '../../utils/services/products.services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  productList: Product[] = [];

  constructor(private productService : ProductService) {}

  ngOnInit() {
    this.productList = this.productService.products;
    if (this.productList.length <= 0) {
      this.productList.push({
        name: "Chocolatine",
        desc: "Viennoiserie constituée d'une pâte levée feuilletée, rectangulaire et enroulée sur plusieurs barres de chocolat.",
        price: 0.2
      });
      this.productList.push({
        name: "Pain au chocolat",
        desc: "Viennoiserie constituée d'une pâte levée feuilletée, rectangulaire et enroulée sur plusieurs barres de chocolat.",
        price: 0.2
      });
      this.productList.push({
        name: "Petit pain",
        desc: "Viennoiserie constituée d'une pâte levée feuilletée, rectangulaire et enroulée sur plusieurs barres de chocolat.",
        price: 0.2
      });
    }
  }
  

  deleteProduct(product : Product) {
    const i = this.productList.indexOf(product);
    this.productList.splice(i, 1);
  }

  checkoutProduct(product : Product) {
    console.log("added to 'panier'");
  }
}
