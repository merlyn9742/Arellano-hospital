import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPatientHospitalizedComponent } from './detail-patient-hospitalized.component';

describe('DetailPatientHospitalizedComponent', () => {
  let component: DetailPatientHospitalizedComponent;
  let fixture: ComponentFixture<DetailPatientHospitalizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPatientHospitalizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPatientHospitalizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
