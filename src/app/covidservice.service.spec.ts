import { TestBed } from '@angular/core/testing';

import { CovidserviceService } from './covidservice.service';

describe('CovidserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CovidserviceService = TestBed.get(CovidserviceService);
    expect(service).toBeTruthy();
  });
});
