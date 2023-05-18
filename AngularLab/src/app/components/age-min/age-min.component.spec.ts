import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeMinComponent } from './age-min.component';

describe('AgeMinComponent', () => {
  let component: AgeMinComponent;
  let fixture: ComponentFixture<AgeMinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgeMinComponent]
    });
    fixture = TestBed.createComponent(AgeMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
