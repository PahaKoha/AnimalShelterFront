import {inject, Injectable, PLATFORM_ID} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';
import {isPlatformBrowser} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<string | null>(null);
  user$ = this.userSubject.asObservable();


  constructor(private http: HttpClient) {
    this.fetchUsername();
  }

  setUser(username: string) {
    this.userSubject.next(username);
  }

  clearUser() {
    this.userSubject.next(null);
  }

  get currentUser() {
    return this.userSubject.value;
  }

  fetchUsername() {
    let token = null;
    const platformId = inject(PLATFORM_ID);

    if (isPlatformBrowser(platformId)) {
      token = localStorage.getItem("token");
    }
    if (token) {
      this.http.get<{ username: string }>(`${environment.backendUrl}/api/get-user-data`)
        .subscribe({
          next: (response) => {
            this.setUser(response.username);
          },
          error: (error) => {
            console.error('Failed to fetch user nickname', error);
            this.clearUser();
          }
        });
    }
  }
}
