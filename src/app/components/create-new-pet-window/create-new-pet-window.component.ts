import {Component} from '@angular/core';
import {CreateNewPetWindowService} from "../../services/create-new-pet-window.service";

@Component({
  selector: 'app-create-new-pet-window',
  standalone: true,
  imports: [],
  templateUrl: './create-new-pet-window.component.html',
  styleUrl: './create-new-pet-window.component.css'
})
export class CreateNewPetWindowComponent {
  constructor(private createNewPetWindowService: CreateNewPetWindowService) {
  }

  changeCreateNewPetWindowState(): void {
    this.createNewPetWindowService.changeWindowState();
  }
}
