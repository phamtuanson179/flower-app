import { Injectable } from "@angular/core"
import { IProduct } from "../models/product"

@Injectable({ providedIn: 'root' })

export class CartService {
    public productList: IProduct[] = []

    constructor() {
    }

    getCart() {
        return this.productList
    }

    addProduct(product: IProduct) {
        if (this.productList.find((item: IProduct) =>
            item.id == product.id
        )) {
            return alert("San pham da ton tai")
        }

        product.amount = 1

        return this.productList.push(product)
    }

    deleteProduct(productId: string) {
        const newList = this.productList.filter((product: IProduct) =>
            product.id != productId
        )
        this.productList = newList
    }

    updateAmount(productId: string, amount: number) {
        let product = this.productList.find((item: IProduct) => {
            item.id == productId
        })

        if (product) { product.amount = amount }
    }

    total() {
        let res = 0
        this.productList.forEach((item: IProduct) => {
            res += item.amount * item.price
            console.log(res, item.amount, item.price);

        })

        return res
    }

}

