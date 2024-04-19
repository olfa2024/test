import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbubakrComponent } from './abubakr.component';

describe('AbubakrComponent', () => {
  let component: AbubakrComponent;
  let fixture: ComponentFixture<AbubakrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AbubakrComponent]
    });
    fixture = TestBed.createComponent(AbubakrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
