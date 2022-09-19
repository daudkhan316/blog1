import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section3-blogdetails',
  templateUrl: './section3-blogdetails.component.html',
  styleUrls: ['./section3-blogdetails.component.scss']
})
export class Section3BlogdetailsComponent implements OnInit {

  public blogPicture:string="./assets/images/blogTemplate.png";
  public blogLink:string="/mongodb";

  constructor() { }

  ngOnInit(): void {
  }

}
