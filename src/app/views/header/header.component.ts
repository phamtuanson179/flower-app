import { Component, OnInit } from "@angular/core";
import { IOccasion } from "src/app/models/occasion";
import { FlowersService } from "src/app/services/flowers.service";
import { OccasionService } from "src/app/services/occasion.service";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  constructor(private occasionService: OccasionService, private flowerService: FlowersService) {}

  handleWhenGoToProduct(){
    this.occasionService.occasionList.forEach(item=>{
      this.occasionService.deleteFilterFlowerList(item?.id)
    })

    this.flowerService.flowerList.forEach(item=>{
      this.flowerService.deleteFilterFlowerList(item?.id)
    })
  }
}
