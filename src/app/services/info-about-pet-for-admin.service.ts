import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class InfoAboutPetForAdminService {

  constructor(private httpClient: HttpClient) {
  }

  deletePet(id: number): Observable<any> {
    return this.httpClient.delete(`${environment.backendUrl}/api/delete-animal/${id}`);
  }
}
