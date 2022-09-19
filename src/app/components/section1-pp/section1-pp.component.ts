import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section1-pp',
  templateUrl: './section1-pp.component.html',
  styleUrls: ['./section1-pp.component.scss']
})
export class Section1PPComponent implements OnInit {
  public profilePicture:string = "./assets/images/profile.webp";

  constructor() { }

  ngOnInit(): void {
  }

}
