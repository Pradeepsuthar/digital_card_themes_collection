import { Component, OnInit } from '@angular/core';
import { ThemesManagerService } from './services/themes-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'digital-card-app';

  constructor(public theme:ThemesManagerService){
    
  }

  ngOnInit(){
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }
}
