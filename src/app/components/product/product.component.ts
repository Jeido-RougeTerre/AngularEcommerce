import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../../utils/entities/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: Product;

  @Output() deleteEvent = new EventEmitter<Product>();
  @Output() checkoutEvent = new EventEmitter<Product>();

  deleteProduct() {
    this.deleteEvent.emit(this.product);
  }

  checkoutProduct() {
    this.checkoutEvent.emit(this.product);
  }
}
