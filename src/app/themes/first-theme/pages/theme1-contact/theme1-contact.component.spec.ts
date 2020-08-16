import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme1ContactComponent } from './theme1-contact.component';

describe('Theme1ContactComponent', () => {
  let component: Theme1ContactComponent;
  let fixture: ComponentFixture<Theme1ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Theme1ContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Theme1ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
