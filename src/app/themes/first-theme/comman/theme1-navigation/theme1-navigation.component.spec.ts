import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme1NavigationComponent } from './theme1-navigation.component';

describe('Theme1NavigationComponent', () => {
  let component: Theme1NavigationComponent;
  let fixture: ComponentFixture<Theme1NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Theme1NavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Theme1NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
