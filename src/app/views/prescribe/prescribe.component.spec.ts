import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescribeComponent } from './prescribe.component';

describe('PrescribeComponent', () => {
  let component: PrescribeComponent;
  let fixture: ComponentFixture<PrescribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
