import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../utils/services/products.services';
import { Product } from '../../utils/entities/product';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [HomeComponent, ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    desc: new FormControl("", [Validators.required]),
    price: new FormControl(0, [Validators.min(0)])
  }, [Validators.required]);

  constructor(private productService : ProductService) {}

  product : Product = {
    name: "",
    desc: "",
    price: 0
  }

  submit() {
    if (this.productForm.valid) {
      this.product.name = this.productForm.value.name!
      this.product.desc = this.productForm.value.desc!
      this.product.price = this.productForm.value.price!
      this.productService.addProduct(this.product);
      this.productForm.reset();
      this.product = {
        name: "",
        desc: "",
        price: 0
      }
    }
  }

}
