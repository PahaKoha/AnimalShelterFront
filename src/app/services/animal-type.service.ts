import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class AnimalTypeService {

  private animalTypeSubject = new BehaviorSubject<any[]>([]);
  animalTypes$ = this.animalTypeSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchAllAnimalTypes();
  }

  private fetchAllAnimalTypes() {
    this.http.get<any[]>(`${environment.backendUrl}/api/animal-types`)
      .subscribe({
        next: (animalTs) => {
          this.animalTypeSubject.next(animalTs);
        },
        error: (error) => {
          console.error('Failed to fetch animal types', error);
          this.animalTypeSubject.next([]);
        }
      });
  }
}
