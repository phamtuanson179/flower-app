import { IFlower } from "src/app/models/flower";
import { IOccasion } from "src/app/models/occasion";

export interface IProduct {
  id: string;
  name: string;
  price: number;
  amount: number;
  detail: string;
  occasions: string[];
  rawOccasions: IOccasion[]
  flowers: string[];
  rawFlowers: IFlower[]
  isCompared: boolean;
  isChosed: boolean;
}
