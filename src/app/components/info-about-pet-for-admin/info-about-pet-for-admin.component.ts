import {Component, Input} from '@angular/core';
import {InfoAboutPetForAdminService} from "../../services/info-about-pet-for-admin.service";
import {response} from "express";

@Component({
  selector: 'app-info-about-pet-for-admin',
  standalone: true,
  imports: [],
  templateUrl: './info-about-pet-for-admin.component.html',
  styleUrl: './info-about-pet-for-admin.component.css'
})
export class InfoAboutPetForAdminComponent {
  @Input() infoAboutPet: any;

  constructor(private infoAboutPetForAdminService: InfoAboutPetForAdminService) {
  }
  deleteAnimal() {
    this.infoAboutPetForAdminService.deletePet(this.infoAboutPet.id).subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
