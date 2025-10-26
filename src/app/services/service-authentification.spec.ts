import { TestBed } from '@angular/core/testing';

import { ServiceAuthentification } from './service-authentification';

describe('ServiceAuthentification', () => {
  let service: ServiceAuthentification;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAuthentification);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
