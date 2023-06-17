import { Injectable } from "@angular/core";
import { IProduct } from "../models/product";
import { ProductService } from "src/app/services/product.service";

@Injectable({ providedIn: "root" })
export class CartService {
  constructor(private productService: ProductService) {}

  addProduct(product: IProduct) {
    if (product.isChosed) {
      return alert("San pham da ton tai");
    }

    product.amount = 1;
    product.isChosed = true;
  }

  deleteProduct(productId: string) {
    const deleteProduct = this.productService.productList.find(
      (product: IProduct) => product.id == productId
    );

    if (deleteProduct) {
      deleteProduct.isChosed = false;
      deleteProduct.amount = 0;
    }
  }

  updateAmount(productId: string, amount: number) {
    let product = this.productService.productList.find((item: IProduct) => {
      item.id == productId;
    });

    if (product) {
      product.amount = amount;
    }
  }

  total() {
    let res = 0;
    this.productService.productList
      .filter((item) => item.isChosed)
      .forEach((item: IProduct) => {
        res += item.amount * item.price;
      });

    return res;
  }

  totalAmount() {
    let res = 0;
    this.productService.productList
      .filter((item) => item.isChosed)
      .forEach((item: IProduct) => {
        res += item.amount;
      });

    return res;
  }
}
