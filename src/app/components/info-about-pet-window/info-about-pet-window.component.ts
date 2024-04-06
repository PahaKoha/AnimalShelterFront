import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-info-about-pet-window',
  standalone: true,
  imports: [],
  templateUrl: './info-about-pet-window.component.html',
  styleUrl: './info-about-pet-window.component.css'
})
export class InfoAboutPetWindowComponent {
  @Input() infoAboutPet: any;
}
