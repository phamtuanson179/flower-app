import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IProduct } from "src/app/models/product";

@Injectable({ providedIn: 'root' })

export class ProductService {
    constructor(private httpClient: HttpClient) { }

    getProduct() {
        return this.httpClient.get<IProduct[]>('http://localhost:3000/products')
    }
}

