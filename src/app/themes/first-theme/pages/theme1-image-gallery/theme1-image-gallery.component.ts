import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme1-image-gallery',
  templateUrl: './theme1-image-gallery.component.html',
  styleUrls: ['./theme1-image-gallery.component.scss']
})
export class Theme1ImageGalleryComponent implements OnInit {

  openModalImg:string;
  constructor() { }

  ngOnInit(): void {
  }

  openModal(imgUrl){
    this.openModalImg = imgUrl;
  }

}
