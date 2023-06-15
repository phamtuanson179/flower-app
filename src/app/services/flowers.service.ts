import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IFlower } from "src/app/models/flower";
import { IOccasion } from "src/app/models/occasion";

@Injectable({ providedIn: "root" })
export class FlowersService {
  public flowerList: IFlower[] = [];

  constructor(private httpClient: HttpClient) {
    this.get().subscribe((res) => {
      this.flowerList = res;
    });
  }

  get() {
    return this.httpClient.get<IFlower[]>("http://localhost:3000/flowers");
  }

  addFilterFlowerList(flower: IFlower) {
    if (flower?.isFiltered == true) {
      return alert("San pham da co trong danh sach so sanh");
    }
    flower.isFiltered = true;
  }

  deleteFilterFlowerList(flowerId: string) {
    const flower = this.flowerList.find((item: IFlower) => item.id == flowerId);

    if (flower) {
      flower.isFiltered = false;
    }
  }
}
