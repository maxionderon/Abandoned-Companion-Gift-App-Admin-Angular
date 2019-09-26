import { TestBed } from '@angular/core/testing';

import { GiftReactionService } from './gift-reaction.service';

describe('GiftReactionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiftReactionService = TestBed.get(GiftReactionService);
    expect(service).toBeTruthy();
  });
});
