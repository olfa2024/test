import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientComponent } from './ingredient.component';

describe('IngredientComponent', () => {
  let component: IngredientComponent;
  let fixture: ComponentFixture<IngredientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IngredientComponent]
    });
    fixture = TestBed.createComponent(IngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
