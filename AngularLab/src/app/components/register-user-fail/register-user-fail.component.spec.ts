import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserFailComponent } from './register-user-fail.component';

describe('RegisterUserFailComponent', () => {
  let component: RegisterUserFailComponent;
  let fixture: ComponentFixture<RegisterUserFailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterUserFailComponent]
    });
    fixture = TestBed.createComponent(RegisterUserFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
