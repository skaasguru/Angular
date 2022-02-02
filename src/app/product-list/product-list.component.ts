import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IProduct } from '../models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: IProduct[] | undefined;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.listProducts().subscribe({
      next: (res) => this.products = res,
      error: (e) => console.error(e)
    });
  }

}
