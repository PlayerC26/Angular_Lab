import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeMaxComponent } from './age-max.component';

describe('AgeMaxComponent', () => {
  let component: AgeMaxComponent;
  let fixture: ComponentFixture<AgeMaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgeMaxComponent]
    });
    fixture = TestBed.createComponent(AgeMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
