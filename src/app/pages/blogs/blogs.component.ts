import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  public blogPicture:string ="./assets/images/blogTemplate.png";
  public blogLink:string="/mongodb";

  constructor() { }

  ngOnInit(): void {
  }

}
