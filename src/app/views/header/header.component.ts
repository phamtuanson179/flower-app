import { Component, OnInit } from '@angular/core';
import { IOcassion } from 'src/app/models/ocassion';
import { OcassionService } from 'src/app/services/ocassion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // public ocassions: IOcassion[] = []

  constructor(private ocassionService: OcassionService) {

  }

  ngOnInit(): void {
    // this.getOcassion()
  }

  // getOcassion() {
  //   this.ocassionService.getOcassion().subscribe(res => {
  //     this.ocassions = res
  //   })
  // }


}
