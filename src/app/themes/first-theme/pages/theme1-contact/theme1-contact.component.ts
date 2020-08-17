import { Component, OnInit } from '@angular/core';
import { ThemesManagerService } from 'src/app/services/themes-manager.service';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-theme1-contact',
  templateUrl: './theme1-contact.component.html',
  styleUrls: ['./theme1-contact.component.scss']
})
export class Theme1ContactComponent implements OnInit {
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

  ngOnInit(): void { }

  contactForm = new FormGroup({
    fullName: new FormControl(''),
    mobileNumber: new FormControl(''),
    message: new FormControl(''),
  });

  onSubmit() {
    try {
      console.log("Contact Form is", this.contactForm.value)
      this._themeService.makeEnquiry(this.contactForm.value.fullName, this.contactForm.value.mobileNumber, this.contactForm.value.message)
      Swal.fire('Thank you...', 'Your message submitted succesfully!', 'success')
      this.contactForm.reset()
    } catch{
      Swal.fire(
        'Something Went Wrong',
        'Your message not submitted :(',
        'error'
      )
    }

  }

}
