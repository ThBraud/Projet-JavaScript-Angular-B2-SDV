import { TestBed } from '@angular/core/testing';

import { ListeArticlesService } from './liste-articles-service';

describe('ListeArticlesService', () => {
  let service: ListeArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
