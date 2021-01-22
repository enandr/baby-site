import { TestBed } from '@angular/core/testing';

import { BabyNameService } from './baby-name.service';

describe('BabyNameService', () => {
  let service: BabyNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BabyNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
