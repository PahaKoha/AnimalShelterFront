import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UpdatePetWindowService {
  private windowStates: {[key: number]: boolean} = {};

  constructor(private httpClient: HttpClient) { }

  isWindowOpen(id: number): boolean {
    return this.windowStates[id];
  }

  changeWindowState(id: number): void {
    this.windowStates[id] = !this.windowStates[id];
  }

  updatePet(formData: FormData, id: number): Observable<any> {
    return this.httpClient.post(`http://localhost:8080/api/update-animal/${id}`, formData);
  }
}
