import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IOccasion } from "src/app/models/occasion";
import { IProduct } from "src/app/models/product";
import { CartService } from "src/app/services/cart.service";
import { OccasionService } from "src/app/services/occasion.service";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public products: IProduct[] = [];
  public newProductList: IProduct[] = [];
  public hotProductList: IProduct[] = [];

  constructor(
    public occasionService: OccasionService,
    public productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.newProductList = this.randomElementInArray(
        this.productService.productList,
        8
      );
      this.hotProductList = this.randomElementInArray(
        this.productService.productList,
        8
      );
    }, 500);
  }

  addToCart(product: IProduct) {
    this.cartService.addProduct(product);
  }

  handleCompareProduct(value: boolean, product: IProduct) {
    if (value && product?.id) {
      this.productService.addCompareProduct(product);
    } else if (!value && product?.id) {
      this.productService.deleteCompareProduct(product.id);
    }
  }

  onClickOccasion(occasion: IOccasion) {
    this.occasionService.occasionList.forEach(
      (item) => (item.isFiltered = false)
    );

   
    this.occasionService.addFilterOccasionList(occasion);
    this.router.navigateByUrl("/products");
  }

  goToProductDetail(product: IProduct) {
    this.productService.goToProductDetail(product);
  }

  randomElementInArray(array: any[], amount: number) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, amount);
  }
}
