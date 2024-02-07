import { TestBed } from '@angular/core/testing';

import { AssetAPIService } from '../../../Assets/asset-api.service';

describe('AssetAPIService', () => {
  let service: AssetAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
