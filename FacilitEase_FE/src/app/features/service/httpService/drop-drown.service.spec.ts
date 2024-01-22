import { TestBed } from '@angular/core/testing';

import { DropDrownService } from './drop-drown.service';

describe('DropDrownService', () => {
  let service: DropDrownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropDrownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
