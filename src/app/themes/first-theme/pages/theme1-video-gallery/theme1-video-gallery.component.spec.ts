import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme1VideoGalleryComponent } from './theme1-video-gallery.component';

describe('Theme1VideoGalleryComponent', () => {
  let component: Theme1VideoGalleryComponent;
  let fixture: ComponentFixture<Theme1VideoGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Theme1VideoGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Theme1VideoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
