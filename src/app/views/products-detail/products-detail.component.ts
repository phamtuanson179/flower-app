import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IProduct } from "src/app/models/product";
import { CartService } from "src/app/services/cart.service";
import { FlowersService } from "src/app/services/flowers.service";
import { OccasionService } from "src/app/services/occasion.service";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-products-detail",
  templateUrl: "./products-detail.component.html",
  styleUrls: ["./products-detail.component.scss"],
})
export class ProductsDetailComponent implements OnInit {
  public product?: IProduct;
  public moreProductList: IProduct[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    public productService: ProductService,
    private flowerService: FlowersService,
    private occasionService: OccasionService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.activatedRoute.paramMap.subscribe((res) => {
        const id = res.get("id");
        if (id) {
          this.product = this.productService.productList.find(
            (item) => item.id == id
          );
          // if (this.product?.id) {
          //   this.mapFlowerToProduct(this.product);
          //   this.mapOccasionToProduct(this.product);
          // }
        }
      });

      this.moreProductList = this.randomElementInArray(
        this.productService?.productList,
        4
      );
    }, 1000);
  }

  

  randomElementInArray(array: any[], amount: number) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, amount);
  }

  goToProductDetail(product: IProduct) {
    this.productService.goToProductDetail(product);
  }

  addToCart(product?: IProduct) {
    console.log(product);

    if (product) this.cartService.addProduct(product);
  }

  goToProductsPage() {
    this.router.navigateByUrl('/products')
  }

  handleCompareProduct(value: boolean, product?: IProduct) {
    if (value && product?.id) {
      this.productService.addCompareProduct(product);
    } else if (!value && product?.id) {
      this.productService.deleteCompareProduct(product.id);
    }
  }
}
