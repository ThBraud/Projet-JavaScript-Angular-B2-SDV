import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierArticle } from './modifier-article';

describe('ModifierArticle', () => {
  let component: ModifierArticle;
  let fixture: ComponentFixture<ModifierArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierArticle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierArticle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
