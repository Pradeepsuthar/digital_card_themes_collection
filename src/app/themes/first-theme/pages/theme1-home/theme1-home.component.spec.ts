import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme1HomeComponent } from './theme1-home.component';

describe('Theme1HomeComponent', () => {
  let component: Theme1HomeComponent;
  let fixture: ComponentFixture<Theme1HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Theme1HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Theme1HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
