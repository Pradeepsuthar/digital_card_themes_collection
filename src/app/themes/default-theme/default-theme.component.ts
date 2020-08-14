import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-theme',
  templateUrl: './default-theme.component.html',
  styleUrls: ['./default-theme.component.scss']
})
export class DefaultThemeComponent implements OnInit {
  // map vars start
  center = {lat: 24, lng: 12};
  markerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [{lat:24,lng:12}];
  zoom = 4;
  display?: google.maps.LatLngLiteral;
  // map vars end

  products:any=[
    {
      productImgUrl:"https://pradeepsuthar.github.io/hesley_website_australia/assets/images/placeholder-200x200.png",
      productName:"Product name 1",
      sale:true,
      mrpPrice:399,
      salePrice:299
    },
    {
      productImgUrl:"https://pradeepsuthar.github.io/hesley_website_australia/assets/images/placeholder-200x200.png",
      productName:"Product name 2",
      sale:true,
      mrpPrice:289,
      salePrice:199
    },
    {
      productImgUrl:"https://pradeepsuthar.github.io/hesley_website_australia/assets/images/placeholder-200x200.png",
      productName:"Product name 3",
      sale:true,
      mrpPrice:799,
      salePrice:499
    },
  ]

  photoGallry:any=[
    {
      imgUrl:"https://pradeepsuthar.github.io/hesley_website_australia/assets/images/placeholder-200x200.png"
    },
    {
      imgUrl:"https://pradeepsuthar.github.io/hesley_website_australia/assets/images/placeholder-200x200.png"
    },
    {
      imgUrl:"https://pradeepsuthar.github.io/hesley_website_australia/assets/images/placeholder-200x200.png"
    },
    {
      imgUrl:"https://pradeepsuthar.github.io/hesley_website_australia/assets/images/placeholder-200x200.png"
    },
    {
      imgUrl:"https://pradeepsuthar.github.io/hesley_website_australia/assets/images/placeholder-200x200.png"
    },
    {
      imgUrl:"https://pradeepsuthar.github.io/hesley_website_australia/assets/images/placeholder-200x200.png"
    },
    {
      imgUrl:"https://pradeepsuthar.github.io/hesley_website_australia/assets/images/placeholder-200x200.png"
    },
    {
      imgUrl:"https://pradeepsuthar.github.io/hesley_website_australia/assets/images/placeholder-200x200.png"
    },
  ]

  constructor() { }

  ngOnInit(): void { }

}
