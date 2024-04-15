import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UpdatePetWindowService {
  private windowState: boolean = false;

  constructor(private httpClient: HttpClient) {
  }

  isWindowOpen(): boolean {
    return this.windowState;
  }

  changeWindowState(): void {
    this.windowState = !this.windowState;
  }

  updatePet(formData: FormData, id: number): Observable<any> {
    return this.httpClient.post(`http://localhost:8080/api/update-animal/${id}`, formData);
  }
}
