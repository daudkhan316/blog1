import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mongodb',
  templateUrl: './mongodb.component.html',
  styleUrls: ['./mongodb.component.scss']
})
export class MongodbComponent implements OnInit {

  constructor() { }

  public blogPicture:string ="./assets/images/blogTemplate.png";

  ngOnInit(): void {
  }

}
