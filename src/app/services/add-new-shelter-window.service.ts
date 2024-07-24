import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class AddNewShelterWindowService {

  private windowState: boolean = false;

  constructor(private httpClient: HttpClient) {
  }

  isWindowOpen(): boolean {
    return this.windowState;
  }

  changeWindowState(): void {
    this.windowState = !this.windowState;
  }

  createNewPet(formData: FormData): Observable<any> {
    return this.httpClient.put(`${environment.backendUrl}/api/add-new-shelter`, formData);
  }
}
