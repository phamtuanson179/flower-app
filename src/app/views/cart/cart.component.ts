import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  constructor(public cartService: CartService){

  }

  removeProduct(id: string) {
    this.cartService.deleteProduct(id)
  }

  totalPrice() {
    
    return this.cartService.total()
  }

}
