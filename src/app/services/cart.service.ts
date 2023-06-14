import { Injectable } from "@angular/core"
import { IProduct } from "../models/product"

@Injectable({ providedIn: 'root' })

export class CartService {
    public listProducts: IProduct[] = []

    constructor() {
    }

    getCart() {
        return this.listProducts
    }

    addProduct(product: IProduct) {
        console.log(product, this.listProducts);

        if (this.listProducts.find((item: IProduct) =>
            item.id == product.id
        )) {
            return alert("San pham da ton tai")
        }

        product.amount = 1

        return this.listProducts.push(product)
    }

    deleteProduct(productId: string) {
        const newCart = this.listProducts.filter((product: IProduct) =>
            product.id != productId
        )

        this.listProducts = newCart
    }

    updateAmount(productId: string, amount: number) {
        //amount = 0 xu li trc do
        // if (amount == 0) {
        //   this.deleteProduct(productId)
        // }

        let product = this.listProducts.find((item: IProduct) => {
            item.id == productId
        })

        if (product) { product.amount = amount }
    }

    total() {
        let res = 0
        this.listProducts.forEach((item: IProduct) => {
            res += item.amount * item.price
            console.log(res, item.amount, item.price);

        })

        return res
    }





}


//listProducts: [{id:'1', name:'hoa mua xuan', price:100, amount: 1 }]