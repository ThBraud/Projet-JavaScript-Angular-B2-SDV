import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotDePasseOublier } from './mot-de-passe-oublier';

describe('MotDePasseOublier', () => {
  let component: MotDePasseOublier;
  let fixture: ComponentFixture<MotDePasseOublier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotDePasseOublier]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotDePasseOublier);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
