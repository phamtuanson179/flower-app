import { Component } from "@angular/core";
import { CartService } from "src/app/services/cart.service";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent {
  constructor(
    public cartService: CartService,
    public productService: ProductService
  ) {}

  getChosedProductList() {
    return this.productService.productList.filter((item) => item.isChosed);
  }

  removeProduct(id: string) {
    this.cartService.deleteProduct(id);
  }

  totalPrice() {
    return this.cartService.total();
  }

  totalAmout() {
    return this.cartService.totalAmount();
  }

  buy(){
    alert("Ban da mua thanh cong!")
  }
}
