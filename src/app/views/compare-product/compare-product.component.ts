import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-compare-product',
  templateUrl: './compare-product.component.html',
  styleUrls: ['./compare-product.component.scss']
})
export class CompareProductComponent {
  constructor(public productService: ProductService){

  }


  getCompareProductList(){
    return this.productService.productList.filter(item=>item.isCompared)
  }
}
