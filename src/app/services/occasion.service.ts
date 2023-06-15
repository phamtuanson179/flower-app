import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IOccasion } from "src/app/models/occasion";

@Injectable({ providedIn: "root" })
export class OccasionService {
  public occasionList: IOccasion[] = [];

  constructor(private httpClient: HttpClient) {
    this.get().subscribe((res) => {
      this.occasionList = res;
    });
  }

  get() {
    return this.httpClient.get<IOccasion[]>("http://localhost:3000/occasions");
  }

  addFilterOccasionList(occasion: IOccasion) {
    if (occasion.isFiltered == true) {
      return alert("San pham da co trong danh sach so sanh");
    }
    occasion.isFiltered = true;
    console.log(this.occasionList);
    
  }

  deleteFilterFlowerList(occasionId: string) {
    const occasion = this.occasionList.find(
      (item: IOccasion) => item.id == occasionId
    );
    if (occasion) occasion.isFiltered = false;
  }
}
