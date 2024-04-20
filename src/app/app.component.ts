import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { LogInService } from "./services/log-in.service";
import { LogInComponent } from "./components/log-in/log-in.component";
import { NgIf } from "@angular/common";
import { RegistrationService } from './services/registration.service';
import { RegistrationComponent } from './components/registration/registration.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, LogInComponent, NgIf, RegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'animal-shelter-front';

  constructor(private logInService: LogInService, private registrationService: RegistrationService) {
  }
  isLogInWindowOpen(): boolean {
    return this.logInService.isWindowOpen();
  }

  isRegistrationWindowOpen(): boolean {
    return this.registrationService.isWindowOpen();
  }
}
