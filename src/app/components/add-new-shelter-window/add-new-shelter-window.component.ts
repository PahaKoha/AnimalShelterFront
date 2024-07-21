import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {AddNewShelterWindowService} from "../../services/add-new-shelter-window.service";

@Component({
  selector: 'app-add-new-shelter-window',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-new-shelter-window.component.html',
  styleUrl: './add-new-shelter-window.component.css'
})
export class AddNewShelterWindowComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private addNewShelterWindowService: AddNewShelterWindowService) {
  }

  newShelterFormGroup!: FormGroup;

  changeAddNewShelterWindowState(): void {
    this.addNewShelterWindowService.changeWindowState();
  }

  ngOnInit(): void {
    this.newShelterFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
    })
  }

  addNewShelter() : void {
    this.addNewShelterWindowService.createNewPet(this.newShelterFormGroup.value).subscribe({
      next: (response) => {
        location.reload();
        console.log(response.message);
        alert(`Приют: "'${this.newShelterFormGroup.value.name}'" был успешно добавлен!`);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
