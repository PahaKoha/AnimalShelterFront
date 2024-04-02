import {Component, OnInit} from '@angular/core';
import {TestService} from "../../services/test.service";
import {response} from "express";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit {

  image!: string;
  imageUrl!: string;

  constructor(private testService: TestService) {
  }

  ngOnInit(): void {
    this.testService.getPetById(4).subscribe({
      next: (response) => {
        this.image = response.photo;
        this.imageUrl = `data:image/jpeg;base64,${this.image}`;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }


}
