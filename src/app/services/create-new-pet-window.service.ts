import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CreateNewPetWindowService {

  private windowState: boolean = false;

  constructor(private httpClient: HttpClient) {
  }

  isWindowOpen(): boolean {
    return this.windowState;
  }

  changeWindowState(): void {
    this.windowState = !this.windowState;
  }

  createNewPet(formData: FormData): Observable<any> {
    return this.httpClient.put('http://localhost:8080/api/save-animal', formData);
  }

}
