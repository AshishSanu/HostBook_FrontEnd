import { TestBed } from '@angular/core/testing';

import { BulkrecordService } from './bulkrecord.service';

describe('BulkrecordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BulkrecordService = TestBed.get(BulkrecordService);
    expect(service).toBeTruthy();
  });
});
