import { Component } from "@angular/core";
import { Subject } from "rxjs";
import { IFlower } from "src/app/models/flower";
import { IOccasion } from "src/app/models/occasion";
import { IProduct } from "src/app/models/product";
import { CartService } from "src/app/services/cart.service";
import { FlowersService } from "src/app/services/flowers.service";
import { OccasionService } from "src/app/services/occasion.service";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent {
  public products: IProduct[] = [];
  public isRefreshData = new Subject<boolean>();

  constructor(
    public occasionService: OccasionService,
    public productService: ProductService,
    private cartService: CartService,
    public flowerService: FlowersService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.products = this.productService.productList;
      this.filter();
    }, 1000);
  }

  filter() {
    //step 1: filter flower
    const filteredProductListAfterFlower =
      this.productService.productList.filter((product: IProduct) => {
        const flowerIdListStringOfProduct = product.flowers?.map(
          (item) => item.id
        );
        let res = true;

        this.flowerService.flowerList
          .filter((item: IFlower) => item.isFiltered)
          ?.forEach((flower: IFlower) => {
            if (!flowerIdListStringOfProduct?.includes(flower.id)) {
              res = false;
            }
          });

        return res;
      });

    //step 2: filter occasion
    const filteredProductListAfterFlowerAndOccasionFilter =
      filteredProductListAfterFlower.filter((product: IProduct) => {
        let res = true;

        this.occasionService.occasionList
          .filter((item) => item.isFiltered)
          .forEach((occasion: IOccasion) => {
            if (!product.occasions?.includes(occasion.id)) {
              res = false;
            }
          });

        return res;
      });

    this.products = filteredProductListAfterFlowerAndOccasionFilter;
  }

  searchByOcassion(event: Event, occasion: IOccasion) {
    if ((event.target as HTMLInputElement).checked && occasion?.id) {
      this.occasionService.addFilterOccasionList(occasion);
      this.filter();
    } else if (!(event.target as HTMLInputElement).checked && occasion?.id) {
      this.occasionService.deleteFilterFlowerList(occasion.id);
      this.filter();
    }
  }

  searchByFlower(event: Event, flower: IFlower) {
    if ((event.target as HTMLInputElement).checked && flower?.id) {
      this.flowerService.addFilterFlowerList(flower);
      this.filter();
    } else if (!(event.target as HTMLInputElement).checked && flower?.id) {
      this.flowerService.deleteFilterFlowerList(flower.id);
      this.filter();
    }
  }

  addToCart(product: IProduct) {
    this.cartService.addProduct(product);
  }

  goToProductDetail(product: IProduct) {
    this.productService.goToProductDetail(product);
  }

  handleCompareProduct(value: boolean, product: IProduct) {
    if (value && product?.id) {
      this.productService.addCompareProduct(product);
    } else if (!value && product?.id) {
      this.productService.deleteCompareProduct(product.id);
    }
  }
}
