import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAllHolidaysComponent } from './user-all-holidays.component';

describe('UserAllHolidaysComponent', () => {
  let component: UserAllHolidaysComponent;
  let fixture: ComponentFixture<UserAllHolidaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAllHolidaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAllHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
