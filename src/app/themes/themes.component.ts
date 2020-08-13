import { Component, OnInit } from '@angular/core';
import { ThemesManagerService } from '../services/themes-manager.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {

  theme_id=0;

  constructor(
    private _themeService: ThemesManagerService
  ) { }

  ngOnInit(): void {
    this._themeService.getAllThemes()
  }

}
