import { TestBed } from '@angular/core/testing';

import { AddMedicationService } from './add-medication.service';

describe('AddMedicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddMedicationService = TestBed.get(AddMedicationService);
    expect(service).toBeTruthy();
  });
});
