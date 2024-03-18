import {Component} from '@angular/core';
import {CreateNewPetWindowService} from "../../services/create-new-pet-window.service";
import {CreateNewPetWindowComponent} from "../create-new-pet-window/create-new-pet-window.component";
import {NgIf} from "@angular/common";
import {DeletePetWindowComponent} from "../delete-pet-window/delete-pet-window.component";
import {DeletePetWindowService} from "../../services/delete-pet-window.service";

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [
    CreateNewPetWindowComponent,
    NgIf,
    DeletePetWindowComponent
  ],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {
  constructor(private createNewPetWindowService: CreateNewPetWindowService, private deletePetWindow: DeletePetWindowService) {
  }

  isCreateDeletePetWindowOpen(): boolean {
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
}
