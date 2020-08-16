import { Component, OnInit } from '@angular/core';
import { ThemesManagerService } from 'src/app/services/themes-manager.service';

@Component({
  selector: 'app-theme1-navigation',
  templateUrl: './theme1-navigation.component.html',
  styleUrls: ['./theme1-navigation.component.scss']
})
export class Theme1NavigationComponent implements OnInit {

  constructor(
    public _themeService: ThemesManagerService
  ) { }

  ngOnInit(): void {
  }

}
