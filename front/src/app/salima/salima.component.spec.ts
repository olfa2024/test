import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalimaComponent } from './salima.component';

describe('SalimaComponent', () => {
  let component: SalimaComponent;
  let fixture: ComponentFixture<SalimaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalimaComponent]
    });
    fixture = TestBed.createComponent(SalimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
