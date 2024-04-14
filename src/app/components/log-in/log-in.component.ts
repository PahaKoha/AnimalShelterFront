import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LogInService} from "../../services/log-in.service";

@Component({
  selector: 'app-log-in',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  constructor(private logInService: LogInService) {
  }
  changeLogInWindowState(): void {
    this.logInService.changeWindowState();
  }
}
