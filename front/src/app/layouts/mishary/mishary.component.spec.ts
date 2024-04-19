import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisharyComponent } from './mishary.component';

describe('MisharyComponent', () => {
  let component: MisharyComponent;
  let fixture: ComponentFixture<MisharyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MisharyComponent]
    });
    fixture = TestBed.createComponent(MisharyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
