import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalizedPatientsComponent } from './hospitalized-patients.component';

describe('HospitalizedPatientsComponent', () => {
  let component: HospitalizedPatientsComponent;
  let fixture: ComponentFixture<HospitalizedPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalizedPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalizedPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
