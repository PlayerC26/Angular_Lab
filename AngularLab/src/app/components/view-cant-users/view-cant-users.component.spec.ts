import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCantUsersComponent } from './view-cant-users.component';

describe('ViewCantUsersComponent', () => {
  let component: ViewCantUsersComponent;
  let fixture: ComponentFixture<ViewCantUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCantUsersComponent]
    });
    fixture = TestBed.createComponent(ViewCantUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
