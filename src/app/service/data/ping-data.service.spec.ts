import { TestBed } from '@angular/core/testing';

import { PingDataService } from './ping-data.service';

describe('PingDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PingDataService = TestBed.get(PingDataService);
    expect(service).toBeTruthy();
  });
});
