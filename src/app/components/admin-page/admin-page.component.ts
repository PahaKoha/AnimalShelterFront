import {Component} from '@angular/core';
import {CreateNewPetWindowService} from "../../services/create-new-pet-window.service";
import {CreateNewPetWindowComponent} from "../create-new-pet-window/create-new-pet-window.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [
    CreateNewPetWindowComponent,
    NgIf
  ],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {
  constructor(private createNewPetWindowService: CreateNewPetWindowService) {
  }

  isCreateNewPetWindowOpen(): boolean {
    return this.createNewPetWindowService.isWindowOpen();
  }

  changeCreateNewPetWindowState(): void {
    this.createNewPetWindowService.changeWindowState();
  }
}
