import {Component, Input, OnInit} from '@angular/core';
import {UpdatePetWindowService} from "../../services/update-pet-window.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {ShelterService} from "../../services/shelter.service";

@Component({
  selector: 'app-update-pet-window',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './update-pet-window.component.html',
  styleUrl: './update-pet-window.component.css'
})
export class UpdatePetWindowComponent implements OnInit {

  updatePetFormGroup!: FormGroup;
  file!: File;
  shelters: any[] = [];


  @Input() animal: any;

  constructor(private updatePetWindowService: UpdatePetWindowService, private formBuilder: FormBuilder,
              private shelterService: ShelterService) {
  }

  ngOnInit(): void {
    this.updatePetFormGroup = this.formBuilder.group({
      name: [this.animal.name || '', Validators.required],
      age: [this.animal.age || '', Validators.required],
      sex: [this.animal.sex || '', Validators.required],
      weight: [this.animal.weight || '', Validators.required],
      height: [this.animal.height || '', Validators.required],
      description: [this.animal.description || '', Validators.required],
      shelterId: ['', Validators.required]
    })

    this.shelterService.shelters$.subscribe({
      next: (shelters) => {
        this.shelters = shelters;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  changeUpdateWindowState(): void {
    this.updatePetWindowService.changeWindowState(this.animal.id);
  }
  updatePet(): void {
    const isConfirm = confirm(`Вы хотите изменить данные зверька с id ${this.animal.id}?`)
    if (isConfirm) {
      let formData = new FormData();
      formData.append('image', this.file);
      formData.append('json', JSON.stringify(this.updatePetFormGroup.value));
      this.updatePetWindowService.updatePet(formData, this.animal.id).subscribe({
        next: (response) => {
          location.reload();
          console.log(response.message);
        },
        error: (error) => {
          console.log(error);
        }
      })
    }
  }
}
