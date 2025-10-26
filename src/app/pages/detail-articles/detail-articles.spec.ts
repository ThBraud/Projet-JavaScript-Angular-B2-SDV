import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailArticles } from './detail-articles';

describe('DetailArticles', () => {
  let component: DetailArticles;
  let fixture: ComponentFixture<DetailArticles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailArticles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailArticles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
