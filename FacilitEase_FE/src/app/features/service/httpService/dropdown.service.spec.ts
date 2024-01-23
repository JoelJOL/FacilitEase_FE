import { TestBed } from '@angular/core/testing';

import { DropDownService } from './dropdown.service';

describe('DropdownService', () => {
  let service: DropDownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropDownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
