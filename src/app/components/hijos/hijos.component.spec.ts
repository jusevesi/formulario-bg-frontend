import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijosComponent } from './hijos.component';

describe('HijosComponent', () => {
  let component: HijosComponent;
  let fixture: ComponentFixture<HijosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
