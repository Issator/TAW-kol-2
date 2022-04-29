import { TestBed } from '@angular/core/testing';

import { JNDataService } from './jn-data.service';

describe('JNDataService', () => {
  let service: JNDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JNDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
