import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrationUserDTO } from '../DTOs/registration-user-dto';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private windowState: boolean = false;

  constructor(private httpClient: HttpClient) {}

  isWindowOpen(): boolean {
    return this.windowState;
  }

  changeWindowState(): void {
    this.windowState = !this.windowState;
  }
   
  registration(registrationUserDTO: RegistrationUserDTO): Observable<any> {
    return this.httpClient.put(`${environment.backendUrl}/auth/registration`, registrationUserDTO);
  }
}
