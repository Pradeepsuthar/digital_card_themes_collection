import { Component, OnInit } from '@angular/core';
import { ThemesManagerService } from 'src/app/services/themes-manager.service';

@Component({
  selector: 'app-theme1-image-gallery',
  templateUrl: './theme1-image-gallery.component.html',
  styleUrls: ['./theme1-image-gallery.component.scss']
})
export class Theme1ImageGalleryComponent implements OnInit {

  openModalImg:string;
  constructor(
    public _themeService:ThemesManagerService
  ) { }

  ngOnInit(): void {
  }

  openModal(imgUrl){
    this.openModalImg = imgUrl;
  }

}
