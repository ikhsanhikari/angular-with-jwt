import { TestBed } from '@angular/core/testing';

import { ShortAnswerDataService } from './short-answer-data.service';

describe('ShortAnswerDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShortAnswerDataService = TestBed.get(ShortAnswerDataService);
    expect(service).toBeTruthy();
  });
});
