import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NidamComponent } from './nidam.component';

describe('NidamComponent', () => {
  let component: NidamComponent;
  let fixture: ComponentFixture<NidamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NidamComponent]
    });
    fixture = TestBed.createComponent(NidamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
