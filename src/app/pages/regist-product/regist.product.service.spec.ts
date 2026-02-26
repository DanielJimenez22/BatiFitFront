import { TestBed } from '@angular/core/testing';

import { RegistProductService } from './regist.product.service';

describe('RegistProductService', () => {
  let service: RegistProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
