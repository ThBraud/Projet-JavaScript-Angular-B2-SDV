import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterArticle } from './ajouter-article';

describe('AjouterArticle', () => {
  let component: AjouterArticle;
  let fixture: ComponentFixture<AjouterArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterArticle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterArticle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
