import { TestBed } from '@angular/core/testing';

import { AnkDemoService } from './ank-demo.service';

describe('AnkDemoService', () => {
  let service: AnkDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnkDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
