import {Component, OnInit} from '@angular/core';
import {CreateNewPetWindowService} from "../../services/create-new-pet-window.service";
import {CreateNewPetWindowComponent} from "../create-new-pet-window/create-new-pet-window.component";
import {NgForOf, NgIf} from "@angular/common";
import {DeletePetWindowComponent} from "../delete-pet-window/delete-pet-window.component";
import {DeletePetWindowService} from "../../services/delete-pet-window.service";
import {InfoAboutPetForAdminComponent} from "../info-about-pet-for-admin/info-about-pet-for-admin.component";
import {AdminPageService} from "../../services/admin-page.service";
import {InfoAboutPetWindowComponent} from "../info-about-pet-window/info-about-pet-window.component";
import {UpdatePetWindowComponent} from "../update-pet-window/update-pet-window.component";
import {AddNewShelterWindowService} from "../../services/add-new-shelter-window.service";
import {AddNewShelterWindowComponent} from "../add-new-shelter-window/add-new-shelter-window.component";
import {AnimalService} from "../../services/animal.service";
import {ShelterService} from "../../services/shelter.service";

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
export class AdminPageComponent implements OnInit {
  animals: any[] = [];
  shelters: any[] = [];

  constructor(private createNewPetWindowService: CreateNewPetWindowService, private deletePetWindow: DeletePetWindowService,
              private adminPageService: AdminPageService, private addNewShelterWindowService: AddNewShelterWindowService,
              private animalService: AnimalService, private shelterService: ShelterService) {
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
    this.animalService.animals$.subscribe({
      next: (animals) => {
        this.animals = animals;
      },
      error: (error) => {
        console.log(error);
      }
    });

    this.shelterService.shelters$.subscribe({
      next: (shelters) => {
        this.shelters = shelters;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
