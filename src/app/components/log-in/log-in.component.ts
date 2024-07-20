import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {LogInService} from "../../services/log-in.service";
import {RouterLink} from "@angular/router";
import {RegistrationService} from '../../services/registration.service';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent implements OnInit {

  loginFormGroup!: FormGroup;

  constructor(private logInService: LogInService, private registrationService: RegistrationService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  changeLogInWindowState(): void {
    this.logInService.changeWindowState();
  }

  changeRegistrationWindowState(): void {
    this.registrationService.changeWindowState();
  }

  authUser() {
    console.log(this.loginFormGroup.value)
    this.logInService.logIn(this.loginFormGroup.value).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token)
        location.reload();
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
