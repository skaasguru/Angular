import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  product: any;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    public cart: CartService
  ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    console.log('Product Id: ', productId);
    if (productId) {
      this.api.getProduct(+productId).subscribe({
        next: (res) => this.product = res,
        error: (e) => console.error(e)
      });
    }
  }

  changeCart(id: number) {
    if (this.cart.isInCart(id)) {
      this.cart.removeFromCart(id);
    } else {
      this.cart.addToCart(id);
    }
  }
}
