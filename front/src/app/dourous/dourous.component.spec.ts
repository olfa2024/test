import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DourousComponent } from './dourous.component';

describe('DourousComponent', () => {
  let component: DourousComponent;
  let fixture: ComponentFixture<DourousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DourousComponent]
    });
    fixture = TestBed.createComponent(DourousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
