import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUserOkComponent } from './register-user-ok.component';

describe('RegisterUserOkComponent', () => {
  let component: RegisterUserOkComponent;
  let fixture: ComponentFixture<RegisterUserOkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterUserOkComponent]
    });
    fixture = TestBed.createComponent(RegisterUserOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
