import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StallpagesComponent } from './stallpages.component';

describe('StallpagesComponent', () => {
  let component: StallpagesComponent;
  let fixture: ComponentFixture<StallpagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StallpagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StallpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
