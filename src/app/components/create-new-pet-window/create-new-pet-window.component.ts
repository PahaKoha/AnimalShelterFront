import {Component, Input, OnInit} from '@angular/core';
import {CreateNewPetWindowService} from "../../services/create-new-pet-window.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgFor, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-create-new-pet-window',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgOptimizedImage,
    NgIf,
    NgFor
  ],
  templateUrl: './create-new-pet-window.component.html',
  styleUrl: './create-new-pet-window.component.css'
})
export class CreateNewPetWindowComponent implements OnInit {
  @Input() shelters: any[] = [];

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
      height: ['', Validators.required],
      description: ['', Validators.required],
      shelterId: ['', Validators.required]
    });
  }

  changeCreateNewPetWindowState(): void {
    this.createNewPetWindowService.changeWindowState();
  }

  showInfoAboutPet(): void {
    console.log(this.newPetFormGroup.value);
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  createNewPet(): void {
    if (this.newPetFormGroup.valid) {
      let formData = new FormData();
      formData.append('image', this.file);
      formData.append('json', JSON.stringify(this.newPetFormGroup.value));
      this.createNewPetWindowService.createNewPet(formData).subscribe({
        next: (response) => {
          location.reload();
          console.log(response.message);
          alert(`Зверек под кличкой '${this.newPetFormGroup.value.name}' был успешно добавлен!`);
        },
        error: (error) => {
          console.log(error);
        }
      });
    } else {
      alert('Пожалуйста, заполните все поля.');
    }
  }
}
