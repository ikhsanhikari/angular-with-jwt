import { TestBed } from '@angular/core/testing';

import { HardcodeAuthService } from './hardcode-auth.service';

describe('HardcodeAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardcodeAuthService = TestBed.get(HardcodeAuthService);
    expect(service).toBeTruthy();
  });
});
