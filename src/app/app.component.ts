import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {LogInService} from "./services/log-in.service";
import {LogInComponent} from "./components/log-in/log-in.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, LogInComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'animal-shelter-front';

  constructor(private logInService: LogInService) {
  }
  isLogInWindowOpen(): boolean {
    return this.logInService.isWindowOpen();
  }
}
