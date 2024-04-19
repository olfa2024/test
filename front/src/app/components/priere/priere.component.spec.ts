import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriereComponent } from './priere.component';

describe('PriereComponent', () => {
  let component: PriereComponent;
  let fixture: ComponentFixture<PriereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PriereComponent]
    });
    fixture = TestBed.createComponent(PriereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
