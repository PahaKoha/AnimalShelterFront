import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LogInService} from "../../services/log-in.service";
import {RouterLink} from "@angular/router";
import { RegistrationService } from '../../services/registration.service';

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
export class LogInComponent {
  constructor(private logInService: LogInService, private registrationService: RegistrationService) {
  }
  changeLogInWindowState(): void {
    this.logInService.changeWindowState();
  }

  changeRegistrationWindowState(): void {
    this.registrationService.changeWindowState();
  }
}
