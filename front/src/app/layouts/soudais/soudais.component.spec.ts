import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoudaisComponent } from './soudais.component';

describe('SoudaisComponent', () => {
  let component: SoudaisComponent;
  let fixture: ComponentFixture<SoudaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SoudaisComponent]
    });
    fixture = TestBed.createComponent(SoudaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
