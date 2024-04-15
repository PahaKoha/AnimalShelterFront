import {Component, Input} from '@angular/core';
import {InfoAboutPetForAdminService} from "../../services/info-about-pet-for-admin.service";
import {response} from "express";
import {UpdatePetWindowService} from "../../services/update-pet-window.service";
import {NgIf} from "@angular/common";
import {UpdatePetWindowComponent} from "../update-pet-window/update-pet-window.component";

@Component({
  selector: 'app-info-about-pet-for-admin',
  standalone: true,
  imports: [
    NgIf,
    UpdatePetWindowComponent
  ],
  templateUrl: './info-about-pet-for-admin.component.html',
  styleUrl: './info-about-pet-for-admin.component.css'
})
export class InfoAboutPetForAdminComponent {
  @Input() infoAboutPet: any;

  constructor(private infoAboutPetForAdminService: InfoAboutPetForAdminService, private updatePetWindowService: UpdatePetWindowService) {
  }
  changeUpdateWindowState(): void {
    this.updatePetWindowService.changeWindowState();
  }

  isUpdatePetWindowOpen(): boolean {
    return this.updatePetWindowService.isWindowOpen()
  }
  deleteAnimal() {
    this.infoAboutPetForAdminService.deletePet(this.infoAboutPet.id).subscribe({
      next: (response) => {
        location.reload();
        console.log(response)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
