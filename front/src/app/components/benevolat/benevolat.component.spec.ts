import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenevolatComponent } from './benevolat.component';

describe('BenevolatComponent', () => {
  let component: BenevolatComponent;
  let fixture: ComponentFixture<BenevolatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BenevolatComponent]
    });
    fixture = TestBed.createComponent(BenevolatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
