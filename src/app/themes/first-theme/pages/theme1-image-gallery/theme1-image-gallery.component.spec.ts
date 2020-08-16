import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme1ImageGalleryComponent } from './theme1-image-gallery.component';

describe('Theme1ImageGalleryComponent', () => {
  let component: Theme1ImageGalleryComponent;
  let fixture: ComponentFixture<Theme1ImageGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Theme1ImageGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Theme1ImageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
