import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AddNewAnimalTypeWindowService} from "../../services/add-new-animal-type-window.service";

@Component({
  selector: 'app-add-new-animal-type-window',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-new-animal-type-window.component.html',
  styleUrl: './add-new-animal-type-window.component.css'
})
export class AddNewAnimalTypeWindowComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private addNewAnimalTypeWindowService: AddNewAnimalTypeWindowService) {
  }

  newAnimalTypeFormGroup!: FormGroup;

  changeAddNewShelterWindowState(): void {
    this.addNewAnimalTypeWindowService.changeWindowState();
  }

  ngOnInit(): void {
    this.newAnimalTypeFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
    })
  }

  addNewAnimalType() : void {
    this.addNewAnimalTypeWindowService.createNewAnimalType(this.newAnimalTypeFormGroup.value).subscribe({
      next: (response) => {
        location.reload();
        console.log(response.message);
        alert(`Новый вид зверька: "'${this.newAnimalTypeFormGroup.value.name}'" был успешно добавлен!`);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
