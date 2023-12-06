import { TestBed } from '@angular/core/testing';

import { ServePokService } from './serve-pok.service';

describe('ServePokService', () => {
  let service: ServePokService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServePokService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
