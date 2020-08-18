import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ThemesManagerService } from 'src/app/services/themes-manager.service';

@Component({
  selector: 'app-theme1-navigation',
  templateUrl: './theme1-navigation.component.html',
  styleUrls: ['./theme1-navigation.component.scss']
})
export class Theme1NavigationComponent implements OnInit {
  @ViewChild("toggle") toggle:ElementRef
  constructor(
    public _themeService: ThemesManagerService
  ) { }

  ngOnInit(): void {
  }

  closeNav(){
    console.log(window.innerWidth)
    if(window.innerWidth<=950){
      this.toggle.nativeElement.click()
    }
    
  }

}
