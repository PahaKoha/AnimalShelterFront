import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {DeletePetWindowService} from "../../services/delete-pet-window.service";
import {response} from "express";

@Component({
  selector: 'app-delete-pet-window',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './delete-pet-window.component.html',
  styleUrl: './delete-pet-window.component.css'
})
export class DeletePetWindowComponent {
  constructor(private deletePetWindowService: DeletePetWindowService, private formBuilder: FormBuilder) {
  }

  petFormGroup!: FormGroup;

  ngOnInit(): void {
    this.petFormGroup = this.formBuilder.group({
      id: ['', Validators.required]
    })
  }

  changeDeletePetWindowState(): void {
    this.deletePetWindowService.changeWindowState();
  }

  showDeletedPet(): void {
    console.log(this.petFormGroup.value);
  }

  deletePet() {
    this.deletePetWindowService.deletePet(this.petFormGroup.value.id).subscribe({
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
