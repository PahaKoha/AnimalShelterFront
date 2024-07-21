import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {LogInService} from "../../services/log-in.service";
import {AuthService} from "../../services/auth.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{

  constructor(private logInService: LogInService, private authService: AuthService) {
  }

  username: string | null = null;

  changeLogInWindowState(): void {
    this.logInService.changeWindowState();
  }

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      this.username = user;
    });
  }

}
