import { ProfileService } from './profile.service';
import { PersonalAtributes } from './../../shared/models/personalAtributes';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonBackButton, IonButtons, IonButton, ModalController } from '@ionic/angular/standalone';
import { LowernavbarComponent } from 'src/app/shared/components/lowernavbar/lowernavbar.component';
import { UppernavbarComponent } from 'src/app/shared/components/uppernavbar/uppernavbar.component';
import { PersonalFormComponent } from 'src/app/shared/components/personal-form/personal-form.component';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
  imports: [CommonModule, IonHeader, IonToolbar, IonRow, IonCol, IonTitle, PersonalFormComponent, IonButtons, IonButton, IonContent, IonBackButton, UppernavbarComponent, LowernavbarComponent, IonGrid],
})
export class ProfilePage {
  minCalorias = 0;
  maxCalorias = 3000;
  currentCalorias = 1650;

  datosPerfil: PersonalAtributes | null = null;

  constructor(private modalController: ModalController, private profileService: ProfileService) {}

  ngOnInit()
  {
    this.loadUserInfo();

  }
  loadUserInfo()
  {
        //Cargar datos del usuario
    this.profileService.getUserInfo().subscribe({
      next: (data) => {
        this.datosPerfil = data;
      },
      error: (err) => {
        console.error('Error al cargar los datos del perfil:', err);
      }
    })
  }


  get porcentajeCalorias(): number {
    return ((this.currentCalorias - this.minCalorias) / (this.maxCalorias - this.minCalorias)) * 100;
  }


  //Forma de crear un componente y enviarle datos por Input (component props)
  async openEditModal() {
    const modal = await this.modalController.create({
      component: PersonalFormComponent,
      componentProps: {
        initialData: this.datosPerfil,
      },
      cssClass: 'modal-custom',
      mode: 'ios',
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();
    if (data) {
      this.datosPerfil = data;
      this.loadUserInfo();
      console.log('Datos actualizados:', this.datosPerfil);
    }

  }
}
