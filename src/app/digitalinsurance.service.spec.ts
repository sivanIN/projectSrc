import { TestBed } from '@angular/core/testing';

import { DigitalinsuranceService } from './digitalinsurance.service';

describe('DigitalinsuranceService', () => {
  let service: DigitalinsuranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigitalinsuranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
