import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IFlower } from "src/app/models/flower";
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

  constructor(
    private activatedRoute: ActivatedRoute,
    public productService: ProductService,
    private flowerService: FlowersService,
    private occasionService: OccasionService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.activatedRoute.paramMap.subscribe((res) => {
        const id = res.get("id");
        if (id) {
          this.product = this.productService.productList.find(
            (item) => item.id == id
          );
          if (this.product?.id) {
            this.mapFlowerToProduct(this.product);
            this.mapOccasionToProduct(this.product);
          }
        }
      });
    }, 500);
  }

  private mapFlowerToProduct(product: IProduct) {
    if (product) {
      const rawFlowers = product.flowers.map((item: string) => {
        const [flowerId, amount] = item.split(",");
        const flower = this.flowerService.flowerList.find(
          (item) => item.id == flowerId
        );
        const newRawFlower: IFlower = {
          id: flower?.id ?? "",
          name: flower?.name ?? "",
          amount: parseInt(amount) ?? 0,
        };
        return newRawFlower;
      });
      product.rawFlowers = rawFlowers;
    }
  }

  private mapOccasionToProduct(product: IProduct) {
    if (product) {
      const rawOccasions = product.occasions.map((occasionId: string) => {
        return (
          this.occasionService.occasionList.find(
            (item) => item.id == occasionId
          ) ?? { id: "", name: "" }
        );
      });
      product.rawOccasions = rawOccasions;
    }
  }

  addToCart(product?: IProduct) {
    console.log(product);

    if (product) this.cartService.addProduct(product);
  }

  handleCompareProduct(event: Event, product?: IProduct) {
    if (product) {
      if ((event.target as HTMLInputElement).checked && product?.id) {
        this.productService.addCompareProduct(product);
      } else if (!(event.target as HTMLInputElement).checked && product?.id) {
        this.productService.deleteCompareProduct(product.id);
      }
    }
  }
}
