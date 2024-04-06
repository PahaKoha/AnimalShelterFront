import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient: HttpClient) {
  }

  getPetById(id: number): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/api/animal/${id}`);
  }
}