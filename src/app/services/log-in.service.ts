import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { logInDTO } from '../DTOs/log-in-dto';
import {Observable, tap} from 'rxjs';
import { environment } from '../../environments/environments';
import {AuthService} from "./auth.service";


@Injectable({
  providedIn: 'root'
})
export class LogInService {
  private windowState: boolean = false;

  constructor(private httpClient: HttpClient, private authService: AuthService) {}

  isWindowOpen(): boolean {
    return this.windowState;
  }

  changeWindowState(): void {
    this.windowState = !this.windowState;
  }

  logIn(logInDTO: logInDTO): Observable<any> {
    return this.httpClient.post(`${environment.backendUrl}/auth/authorization`, logInDTO)
  }
}
