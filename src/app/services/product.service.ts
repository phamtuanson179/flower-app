import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { IProduct } from "src/app/models/product";
import { CartService } from "src/app/services/cart.service";
import { FlowersService } from "src/app/services/flowers.service";
import { OccasionService } from "src/app/services/occasion.service";

@Injectable({ providedIn: 'root' })

export class ProductService {
    public productList: IProduct[] = []


    constructor(private httpClient: HttpClient, private flowerService: FlowersService, private occasionService: OccasionService, private router: Router) {
        this.get().subscribe(res => {
            this.productList = res
        })
    }

    get(params?: {
        flowers_like: string,
        occasions_like: string
    }) {
        return this.httpClient.get<IProduct[]>('http://localhost:3000/products', { params })
    }


    addCompareProduct(product: IProduct) {
        if (product.isCompared==true) {
            return alert("San pham da co trong danh sach so sanh")
        }

        product.isCompared = true

    }

    deleteCompareProduct(productId: string) {
        const deleteProduct = this.productList.find((product: IProduct) =>
            product.id == productId
        )
        if (deleteProduct)
            deleteProduct.isCompared = false

    }

    goToProductDetail(product: IProduct){
    this.router.navigateByUrl(`/products/detail/${product?.id}`)
    }   

}

