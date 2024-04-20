import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  constructor(private httpClient: HttpClient) {
  }

  getAllAnimals(): Observable<any> {
    return this.httpClient.get(`${environment.backendUrl}/api/animals`);
  }
}
