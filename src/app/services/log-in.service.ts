import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  private windowState: boolean = false;
  isWindowOpen(): boolean {
    return this.windowState;
  }

  changeWindowState(): void {
    this.windowState = !this.windowState;
  }
}
