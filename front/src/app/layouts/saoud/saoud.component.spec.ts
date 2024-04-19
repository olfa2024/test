import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaoudComponent } from './saoud.component';

describe('SaoudComponent', () => {
  let component: SaoudComponent;
  let fixture: ComponentFixture<SaoudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SaoudComponent]
    });
    fixture = TestBed.createComponent(SaoudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
