import { Component, OnInit } from '@angular/core';
import { ThemesManagerService } from 'src/app/services/themes-manager.service';

@Component({
  selector: 'app-theme1-products',
  templateUrl: './theme1-products.component.html',
  styleUrls: ['./theme1-products.component.scss']
})
export class Theme1ProductsComponent implements OnInit {

  constructor(
    public _themeService: ThemesManagerService
  ) { }

  ngOnInit(): void {
  }

}
