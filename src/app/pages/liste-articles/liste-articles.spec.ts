import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeArticles } from './liste-articles';

describe('ListeArticles', () => {
  let component: ListeArticles;
  let fixture: ComponentFixture<ListeArticles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeArticles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeArticles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
