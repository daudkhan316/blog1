import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public linkedinPNG:string="./assets/images/linkedin.png";
  public youtubePNG:string="./assets/images/youtube.png";
  public twitterPNG:string="./assets/images/twitter.png";
  public githubPNG:string="./assets/images/github.png";

  constructor() { }

  ngOnInit(): void {
  }

}
