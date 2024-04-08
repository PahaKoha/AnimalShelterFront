import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InfoAboutPetForAdminService {

  constructor(private httpClient: HttpClient) {
  }

  deletePet(id: number): Observable<any> {
    return this.httpClient.delete(`http://localhost:8080/api/delete-animal/${id}`);
  }
}
