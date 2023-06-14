import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IOcassion } from "src/app/models/ocassion";

@Injectable({ providedIn: 'root' })

export class OcassionService {
  constructor(private httpClient:HttpClient){}

  getOcassion(){
    return this.httpClient.get<IOcassion[]>('http://localhost:3000/occasions')
  }
}