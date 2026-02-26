import { RegistProductService } from './regist.product.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonBadge,IonGrid} from '@ionic/angular/standalone';
import { IonicModule } from "@ionic/angular";
import { Category } from 'src/app/shared/models/category';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-regist-product',
  templateUrl: './regist-product.page.html',
  styleUrls: ['./regist-product.page.scss'],
  standalone: true,
  imports: [IonBadge,IonGrid,RouterLink, CommonModule, FormsModule, IonicModule]
})
export class RegistProductPage implements OnInit {

  constructor(private registProductService:RegistProductService) { }
  categories:Category[] = [];
  ngOnInit() {
    this.registProductService.getCategories().subscribe({
      next:(categories)=>{
        this.categories = categories;
      },
      error:(err)=>
        {
          console.error(`Error al cargar categorias`,err);
        }
    })



  }

}
