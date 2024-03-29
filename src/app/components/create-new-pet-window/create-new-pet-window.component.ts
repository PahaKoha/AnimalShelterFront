import {Component, OnInit} from '@angular/core';
import {CreateNewPetWindowService} from "../../services/create-new-pet-window.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-create-new-pet-window',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './create-new-pet-window.component.html',
  styleUrl: './create-new-pet-window.component.css'
})
export class CreateNewPetWindowComponent implements OnInit {
  constructor(private createNewPetWindowService: CreateNewPetWindowService, private formBuilder: FormBuilder) {
  }

  newPetFormGroup!: FormGroup;
  file!: File;


  ngOnInit(): void {
    this.newPetFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      sex: ['', Validators.required],
      weight: ['', Validators.required],
      height: ['', Validators.required]
    })
  }

  changeCreateNewPetWindowState(): void {
    this.createNewPetWindowService.changeWindowState();
  }

  showInfoAboutPet(): void {
    console.log(this.newPetFormGroup.value);
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    // const file: File = event.target.files[0];
    // console.log(event.target.files[0]);
    // const reader = new FileReader();
    // reader.onload = (e: any) => {
    //   this.imageUrl = e.target.result;
    // };
    // reader.readAsDataURL(file);
  }

  createNewPet(): void {
    let formData = new FormData();
    formData.append('image', this.file);
    formData.append('json', JSON.stringify(this.newPetFormGroup.value));
    this.createNewPetWindowService.createNewPet(formData).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
