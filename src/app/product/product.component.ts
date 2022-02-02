import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() isAddedToCart: boolean = false;
  @Input('item') product!: IProduct;

  @Output() cartClicked = new EventEmitter<boolean>();

  changeCart(): void {
    this.cartClicked.emit(!this.isAddedToCart);
  }
}
