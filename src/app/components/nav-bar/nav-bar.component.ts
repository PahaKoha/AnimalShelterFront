import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {LogInService} from "../../services/log-in.service";
import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private logInService: LogInService) {
  }
  changeLogInWindowState(): void {
    this.logInService.changeWindowState();
  }

}
