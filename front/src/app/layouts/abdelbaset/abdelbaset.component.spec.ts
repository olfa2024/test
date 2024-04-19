import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbdelbasetComponent } from './abdelbaset.component';

describe('AbdelbasetComponent', () => {
  let component: AbdelbasetComponent;
  let fixture: ComponentFixture<AbdelbasetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AbdelbasetComponent]
    });
    fixture = TestBed.createComponent(AbdelbasetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
