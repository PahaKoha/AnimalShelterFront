import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateNewPetWindowService {

  private windowState: boolean = false;

  constructor() {
  }

  isWindowOpen(): boolean {
    return this.windowState;
  }

  changeWindowState(): void {
    this.windowState = !this.windowState;
  }
}
