import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DumComponent } from './dum.component';

describe('DumComponent', () => {
  let component: DumComponent;
  let fixture: ComponentFixture<DumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
