import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class ShelterService {

  private sheltersSubject = new BehaviorSubject<any[]>([]);
  shelters$ = this.sheltersSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchAllShelters();
  }

  private fetchAllShelters() {
    this.http.get<any[]>(`${environment.backendUrl}/api/shelters`)
      .subscribe({
        next: (shelters) => {
          this.sheltersSubject.next(shelters);
        },
        error: (error) => {
          console.error('Failed to fetch animals', error);
          this.sheltersSubject.next([]);
        }
      });
  }
}
