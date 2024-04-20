import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../services/registration.service';
import { LogInService } from '../../services/log-in.service';
import { FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { response } from 'express';
import { debug } from 'console';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {

  registrationFormGroup!: FormGroup;

  constructor(private registrationService: RegistrationService, private logInService: LogInService, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.registrationFormGroup = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmedPassword: ['', Validators.required]
    })
  }

  changeLogInWindowState(): void {
    this.logInService.changeWindowState();
  }
  changeRegistrationWindowState() {
    this.registrationService.changeWindowState();
  }

  test() {
    console.log(this.registrationFormGroup.value)
  }

  registrationUser(): void {
    this.registrationService.registration(this.registrationFormGroup.value).subscribe({
      next: (response) => {
        console.log(response)
        alert('Пользователь был учпешно зарегистрирован!')
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
