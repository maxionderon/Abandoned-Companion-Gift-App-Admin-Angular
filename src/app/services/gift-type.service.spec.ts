import { TestBed } from '@angular/core/testing';

import { GiftTypeService } from './gift-type.service';

describe('GiftTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiftTypeService = TestBed.get(GiftTypeService);
    expect(service).toBeTruthy();
  });
});
