import { TestBed } from '@angular/core/testing';

import { MoviApiServiceService } from './movi-api-service.service';

describe('MoviApiServiceService', () => {
  let service: MoviApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
