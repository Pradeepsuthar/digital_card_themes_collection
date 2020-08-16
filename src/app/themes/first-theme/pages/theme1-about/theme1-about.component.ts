import { Component, OnInit } from '@angular/core';
import { ThemesManagerService } from 'src/app/services/themes-manager.service';

@Component({
  selector: 'app-theme1-about',
  templateUrl: './theme1-about.component.html',
  styleUrls: ['./theme1-about.component.scss']
})
export class Theme1AboutComponent implements OnInit {

  constructor(
    public _themeService: ThemesManagerService
  ) { }

  ngOnInit(): void {
  }

}
