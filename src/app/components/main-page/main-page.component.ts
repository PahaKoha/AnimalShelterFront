import {Component, OnInit} from '@angular/core';
import {MainPageService} from "../../services/main-page.service";
import {response} from "express";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {InfoAboutPetWindowComponent} from "../info-about-pet-window/info-about-pet-window.component";
import {CommonModule} from "@angular/common";
import {AnimalService} from "../../services/animal.service";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    InfoAboutPetWindowComponent, CommonModule
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit{
  animals: any[] = [];

  constructor(private mainPageService: MainPageService, private animalService: AnimalService) {
  }

  ngOnInit(): void {
    this.animalService.animals$.subscribe({
      next: (animals) => {
        this.animals = animals;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
