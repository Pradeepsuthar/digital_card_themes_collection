import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme1AboutComponent } from './theme1-about.component';

describe('Theme1AboutComponent', () => {
  let component: Theme1AboutComponent;
  let fixture: ComponentFixture<Theme1AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Theme1AboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Theme1AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
