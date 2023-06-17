import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { IFlower } from "src/app/models/flower";
import { IProduct } from "src/app/models/product";
import { CartService } from "src/app/services/cart.service";
import { FlowersService } from "src/app/services/flowers.service";
import { OccasionService } from "src/app/services/occasion.service";

@Injectable({ providedIn: "root" })
export class ProductService {
  public productList: IProduct[] = [];

  constructor(
    private httpClient: HttpClient,
    private flowerService: FlowersService,
    private occasionService: OccasionService,
    private router: Router
  ) {
    setTimeout(()=>{ this.get().subscribe((res) => {
        this.productList = res;
        this.productList.forEach((item) => {
          this.mapFlowerToProduct(item);
          this.mapOccasionToProduct(item);
        });
      });},500)
   
  }

  get(params?: { flowers_like: string; occasions_like: string }) {
    return this.httpClient.get<IProduct[]>("http://localhost:3000/products", {
      params,
    });
  }

  addCompareProduct(product: IProduct) {
    if (product.isCompared == true) {
      return alert("San pham da co trong danh sach so sanh");
    }

    product.isCompared = true;
  }

  deleteCompareProduct(productId: string) {
    const deleteProduct = this.productList.find(
      (product: IProduct) => product.id == productId
    );
    if (deleteProduct) deleteProduct.isCompared = false;
  }

  private mapFlowerToProduct(product: IProduct) {
    if (product) {
      product.flowers.forEach((flower: IFlower) => {
        const findedFlower = this.flowerService.flowerList.find(
          (item) => item.id == flower.id
        );
        flower.name = findedFlower?.name ?? "";
      });
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

  goToProductDetail(product: IProduct) {
    this.router.navigateByUrl(`/products/detail/${product?.id}`);
  }
}
