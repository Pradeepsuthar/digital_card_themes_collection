import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first-theme',
  templateUrl: './first-theme.component.html',
  styleUrls: ['./first-theme.component.scss']
})
export class FirstThemeComponent implements OnInit {
  selectedPage=null
  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(res=>{
      console.log(res)
      this.selectedPage=res['page']
    })
  }

}
