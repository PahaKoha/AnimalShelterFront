import {Component} from '@angular/core';
import {CreateNewPetWindowService} from "../../services/create-new-pet-window.service";
import {CreateNewPetWindowComponent} from "../create-new-pet-window/create-new-pet-window.component";
import {NgForOf, NgIf} from "@angular/common";
import {DeletePetWindowComponent} from "../delete-pet-window/delete-pet-window.component";
import {DeletePetWindowService} from "../../services/delete-pet-window.service";
import {InfoAboutPetForAdminComponent} from "../info-about-pet-for-admin/info-about-pet-for-admin.component";
import {AdminPageService} from "../../services/admin-page.service";
import {InfoAboutPetWindowComponent} from "../info-about-pet-window/info-about-pet-window.component";
import {UpdatePetWindowService} from "../../services/update-pet-window.service";
import {UpdatePetWindowComponent} from "../update-pet-window/update-pet-window.component";
import {AddNewShelterWindowService} from "../../services/add-new-shelter-window.service";
import {AddNewShelterWindowComponent} from "../add-new-shelter-window/add-new-shelter-window.component";

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [
    CreateNewPetWindowComponent,
    NgIf,
    DeletePetWindowComponent,
    InfoAboutPetForAdminComponent,
    InfoAboutPetWindowComponent,
    NgForOf,
    UpdatePetWindowComponent,
    AddNewShelterWindowComponent
  ],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {

  animals: any[] = [];
  constructor(private createNewPetWindowService: CreateNewPetWindowService, private deletePetWindow: DeletePetWindowService,
              private adminPageService: AdminPageService, private addNewShelterWindowService: AddNewShelterWindowService) {
  }
  isDeletePetWindowOpen(): boolean {
    return this.deletePetWindow.isWindowOpen();
  }

  changeDeleteWindowState(): void {
    return this.deletePetWindow.changeWindowState();
  }

  isCreateNewPetWindowOpen(): boolean {
    return this.createNewPetWindowService.isWindowOpen();
  }

  changeCreateNewPetWindowState(): void {
    this.createNewPetWindowService.changeWindowState();
  }

  isAddNewShelterWindowOpen(): boolean {
    return this.addNewShelterWindowService.isWindowOpen();
  }

  changeAddShelterWindowState(): void {
    this.addNewShelterWindowService.changeWindowState();
  }

  ngOnInit(): void {
    this.getInfoAboutAllAnimal();
  }
  getInfoAboutAllAnimal() {
    this.adminPageService.getAllAnimals().subscribe({
        next: (response) => {
          this.animals = response
        },
        error: (error) => {
          console.log(error)
        }
      }
    )
  }
}
