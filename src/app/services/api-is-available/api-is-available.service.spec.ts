import { TestBed } from '@angular/core/testing';

import { ApiIsAvailableService } from './api-is-available.service';

describe('ApiIsAvailableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiIsAvailableService = TestBed.get(ApiIsAvailableService);
    expect(service).toBeTruthy();
  });
});
