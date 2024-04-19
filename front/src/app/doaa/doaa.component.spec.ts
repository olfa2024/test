import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoaaComponent } from './doaa.component';

describe('DoaaComponent', () => {
  let component: DoaaComponent;
  let fixture: ComponentFixture<DoaaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoaaComponent]
    });
    fixture = TestBed.createComponent(DoaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
