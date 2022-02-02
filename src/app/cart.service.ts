import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public products: Set<number> = new Set<number>();

  addToCart(id: number): void {
    this.products.add(id);
  }

  removeFromCart(id: number): void {
    this.products.delete(id);
  }

  isInCart(id: number): boolean {
    return this.products.has(id);
  }
}
