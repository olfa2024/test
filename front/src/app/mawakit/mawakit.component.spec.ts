import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MawakitComponent } from './mawakit.component';

describe('MawakitComponent', () => {
  let component: MawakitComponent;
  let fixture: ComponentFixture<MawakitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MawakitComponent]
    });
    fixture = TestBed.createComponent(MawakitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
