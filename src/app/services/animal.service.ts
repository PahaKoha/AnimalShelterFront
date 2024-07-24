import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private animalsSubject = new BehaviorSubject<any[]>([]);
  animals$ = this.animalsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchAllAnimals();
  }

  private fetchAllAnimals() {
    this.http.get<any[]>(`${environment.backendUrl}/api/animals`)
      .subscribe({
        next: (animals) => {
          this.animalsSubject.next(animals);
        },
        error: (error) => {
          console.error('Failed to fetch animals', error);
          this.animalsSubject.next([]);
        }
      });
  }

  // updateAnimals(newAnimals: any[]): void {
  //   this.animalsSubject.next(newAnimals);
  // }
}
