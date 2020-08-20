import { TestBed } from '@angular/core/testing';

import { MarsweatherService } from './marsweather.service';

describe('MarsweatherService', () => {
  let service: MarsweatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarsweatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
