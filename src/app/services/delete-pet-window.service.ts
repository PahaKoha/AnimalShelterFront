import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class DeletePetWindowService {

  private windowState: boolean = false;

  constructor(private httpClient: HttpClient) {
  }

  isWindowOpen(): boolean {
    return this.windowState;
  }

  changeWindowState(): void {
    this.windowState = !this.windowState;
  }

  deletePet(id: number): Observable<any> {
    return this.httpClient.delete(`${environment.backendUrl}/api/delete-animal/${id}`);
  }
}
