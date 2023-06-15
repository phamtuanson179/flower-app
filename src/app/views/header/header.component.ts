import { Component, OnInit } from "@angular/core";
import { IOccasion } from "src/app/models/occasion";
import { OccasionService } from "src/app/services/occasion.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  constructor(private occasionService: OccasionService) {}
}
