import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme1ProductsComponent } from './theme1-products.component';

describe('Theme1ProductsComponent', () => {
  let component: Theme1ProductsComponent;
  let fixture: ComponentFixture<Theme1ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Theme1ProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Theme1ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
