import {Component, OnInit} from '@angular/core';
import {CreateNewPetWindowService} from "../../services/create-new-pet-window.service";
import {CreateNewPetWindowComponent} from "../create-new-pet-window/create-new-pet-window.component";
import {NgForOf, NgIf} from "@angular/common";
import {DeletePetWindowComponent} from "../delete-pet-window/delete-pet-window.component";
import {DeletePetWindowService} from "../../services/delete-pet-window.service";
import {InfoAboutPetForAdminComponent} from "../info-about-pet-for-admin/info-about-pet-for-admin.component";
import {AdminPageService} from "../../services/admin-page.service";
import {AddNewShelterWindowService} from "../../services/add-new-shelter-window.service";
import {AddNewShelterWindowComponent} from "../add-new-shelter-window/add-new-shelter-window.component";
import {AnimalService} from "../../services/animal.service";
import {ShelterService} from "../../services/shelter.service";
import {AddNewAnimalTypeWindowService} from "../../services/add-new-animal-type-window.service";
import {AddNewAnimalTypeWindowComponent} from "../add-new-animal-type-window/add-new-animal-type-window.component";
import {AnimalTypeService} from "../../services/animal-type.service";

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [
    CreateNewPetWindowComponent,
    NgIf,
    DeletePetWindowComponent,
    InfoAboutPetForAdminComponent,
    NgForOf,
    AddNewShelterWindowComponent,
    AddNewAnimalTypeWindowComponent
  ],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent implements OnInit {
  animals: any[] = [];
  shelters: any[] = [];
  animalTypes: any[] = [];

  constructor(private createNewPetWindowService: CreateNewPetWindowService, private deletePetWindow: DeletePetWindowService,
              private adminPageService: AdminPageService, private addNewShelterWindowService: AddNewShelterWindowService,
              private animalService: AnimalService, private shelterService: ShelterService,
              private animalTypeService: AnimalTypeService, private addNewAnimalTypeWindowService: AddNewAnimalTypeWindowService) {
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

  isAddNewAnimalTypeWindowOpen(): boolean {
    return this.addNewAnimalTypeWindowService.isWindowOpen();
  }

  changeAddAnimalTypeWindowState(): void {
    this.addNewAnimalTypeWindowService.changeWindowState();
  }

  sortAnimalsBy(path: string) {
    const getValue = (obj: any, path: string) =>
      path.split('.').reduce((o, key) => (o ? o[key] : undefined), obj);

    this.animals = [...this.animals].sort((a, b) => {
      const valA = getValue(a, path);
      const valB = getValue(b, path);
      return valA.localeCompare(valB);
    });
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

    this.animalTypeService.animalTypes$.subscribe({
      next: (animalTyp) => {
        this.animalTypes = animalTyp;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
