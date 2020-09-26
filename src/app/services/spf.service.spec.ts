import { TestBed } from '@angular/core/testing';

import { SPFService } from './spf.service';

describe('SPFService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SPFService = TestBed.get(SPFService);
    expect(service).toBeTruthy();
  });
});
