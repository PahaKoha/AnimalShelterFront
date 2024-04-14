import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {LogInService} from "../../services/log-in.service";

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
