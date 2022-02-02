import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: IProduct[] | undefined;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.products = [
        { id: 1, model: 'Redmi Note 10',  price: 600, image: 'https://i.shgcdn.com/d28da852-3c05-408e-bde3-4aeb881e1a08/' },
        { id: 2, model: 'Redmi Note 11',  price: 999, image: 'https://i.shgcdn.com/d28da852-3c05-408e-bde3-4aeb881e1a08/' },
        { id: 3, model: 'Oppo V5',        price: 399, image: 'https://i.shgcdn.com/d28da852-3c05-408e-bde3-4aeb881e1a08/' },
        { id: 4, model: 'Samsung Galaxy', price: 899, image: 'https://i.shgcdn.com/d28da852-3c05-408e-bde3-4aeb881e1a08/' },
      ];
    }, 500);
  }

}
