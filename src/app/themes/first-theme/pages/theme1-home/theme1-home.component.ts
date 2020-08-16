import { Component, OnInit } from '@angular/core';
import { ThemesManagerService } from 'src/app/services/themes-manager.service';

@Component({
  selector: 'app-theme1-home',
  templateUrl: './theme1-home.component.html',
  styleUrls: ['./theme1-home.component.scss']
})
export class Theme1HomeComponent implements OnInit {

  constructor(
    public _themeService: ThemesManagerService
  ) { }

  videoPlayerwidthSize = 0;
  videoPlayerheightSize = 0;

  ngOnInit(): void {
    console.log("Width : ", window.innerWidth)
    console.log("Type Width : ", typeof (window.innerWidth))
    if (window.innerWidth > 1020) {
      this.videoPlayerwidthSize = 350;
      this.videoPlayerheightSize = 200;
    } else if (window.innerWidth > 320) {
      this.videoPlayerwidthSize = 385;
      this.videoPlayerheightSize = 200;
    } else {
      this.videoPlayerwidthSize = 260;
      this.videoPlayerheightSize = 200;
    }

  }

}
