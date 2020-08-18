import { Component, OnInit } from '@angular/core';
import { ThemesManagerService } from 'src/app/services/themes-manager.service';

@Component({
  selector: 'app-theme1-video-gallery',
  templateUrl: './theme1-video-gallery.component.html',
  styleUrls: ['./theme1-video-gallery.component.scss']
})
export class Theme1VideoGalleryComponent implements OnInit {

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
      this.videoPlayerwidthSize = window.innerWidth-20;
      this.videoPlayerheightSize = 200;
    }else{
      this.videoPlayerwidthSize = 310;
      this.videoPlayerheightSize = 200;
    }
  }

}
