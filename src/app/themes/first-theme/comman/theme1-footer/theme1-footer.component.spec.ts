import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme1FooterComponent } from './theme1-footer.component';

describe('Theme1FooterComponent', () => {
  let component: Theme1FooterComponent;
  let fixture: ComponentFixture<Theme1FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Theme1FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Theme1FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
