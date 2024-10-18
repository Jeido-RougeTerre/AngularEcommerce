import { Component } from '@angular/core';
import { Product } from '../../utils/entities/product';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productList: Product[] = [
    {
      name: "Chocolatine",
      desc: "Viennoiserie constituée d'une pâte levée feuilletée, rectangulaire et enroulée sur plusieurs barres de chocolat.",
      price: 0.2
    },
    {
      name: "Pain au chocolat",
      desc: "Viennoiserie constituée d'une pâte levée feuilletée, rectangulaire et enroulée sur plusieurs barres de chocolat.",
      price: 0.2
    },
    {
      name: "Petit pain",
      desc: "Viennoiserie constituée d'une pâte levée feuilletée, rectangulaire et enroulée sur plusieurs barres de chocolat.",
      price: 0.2
    },
  ]

  deleteProduct(product : Product) {
    const i = this.productList.indexOf(product);
    this.productList.splice(i, 1);
  }

  checkoutProduct(product : Product) {
    console.log("added to 'panier'");
  }
}
