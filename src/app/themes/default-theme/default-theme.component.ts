import { Component, OnInit } from '@angular/core';
import { ThemesManagerService } from 'src/app/services/themes-manager.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-default-theme',
  templateUrl: './default-theme.component.html',
  styleUrls: ['./default-theme.component.scss']
})
export class DefaultThemeComponent implements OnInit {
  // map vars start
  center = { lat: 24, lng: 12 };
  markerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [{ lat: 24, lng: 12 }];
  zoom = 4;
  display?: google.maps.LatLngLiteral;
  // map vars end

  constructor(
    public _themeService: ThemesManagerService
  ) { }

  videoPlayerwidthSize = 0;
  videoPlayerheightSize = 0;

  contactForm = new FormGroup({
    fullName: new FormControl(''),
    mobileNumber: new FormControl(''),
    message: new FormControl(''),
  });

  onSubmit(){
    console.log("Contact Form is",this.contactForm.value)
    this._themeService.makeEnquiry(this.contactForm.value.fullName,this.contactForm.value.mobileNumber,this.contactForm.value.message)
    this.contactForm.reset()
  }

  ngOnInit(): void {
    console.log("Width : ",window.innerWidth)
    console.log("Type Width : ",typeof(window.innerWidth))
    if (window.innerWidth > 1020) {
      this.videoPlayerwidthSize = 350;
      this.videoPlayerheightSize = 200;
    }else if (window.innerWidth > 320) {
      this.videoPlayerwidthSize = 350;
      this.videoPlayerheightSize = 200;
    }else{
      this.videoPlayerwidthSize = 260;
      this.videoPlayerheightSize = 200;
    }
  }

}
