import { Component, OnInit } from '@angular/core';
import { IOcassion } from 'src/app/models/ocassion';
import { IProduct } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { OcassionService } from 'src/app/services/ocassion.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public ocassions: IOcassion[] = []
  public products: IProduct[] = []
  constructor(private ocassionService: OcassionService, private productService: ProductService, private cartService: CartService) {
  }



  ngOnInit(): void {
    this.getOcassion()
    this.productService.getProduct().subscribe(res => {
      console.log(res);
      this.products = res
    })
  }


  getOcassion() {
    this.ocassionService.getOcassion().subscribe(res => {
      // console.log(res);
      this.ocassions = res
    })
  }

  addToCart(product: IProduct) {
    this.cartService.addProduct(product)
  }

 


}
