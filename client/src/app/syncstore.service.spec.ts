import { TestBed } from '@angular/core/testing';

import { SyncstoreService } from './syncstore.service';

describe('SyncstoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SyncstoreService = TestBed.get(SyncstoreService);
    expect(service).toBeTruthy();
  });
});
