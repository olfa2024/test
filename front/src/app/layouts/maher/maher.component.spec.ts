import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaherComponent } from './maher.component';

describe('MaherComponent', () => {
  let component: MaherComponent;
  let fixture: ComponentFixture<MaherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaherComponent]
    });
    fixture = TestBed.createComponent(MaherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
