export interface Category {
  id:number;
  categoryName:string;
  type:string;
  parentCategory:Category | null;
  subCategories: Category[];
}
