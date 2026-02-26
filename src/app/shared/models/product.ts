import { Category } from "./category";

export interface Product {
  id:number;
  productName:string;
  category:Category;
  energy:number;
  protein:number;
  carbohydrates:number;
  totalFat:number;
  saturatedFat:number;
  sugars:number;
  fiber:number;
  salt:number;
  cholesterol?:number;
}
