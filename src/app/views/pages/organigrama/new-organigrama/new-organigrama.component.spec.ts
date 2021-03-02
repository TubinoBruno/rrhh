import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrganigramaComponent } from './new-organigrama.component';

describe('NewOrganigramaComponent', () => {
  let component: NewOrganigramaComponent;
  let fixture: ComponentFixture<NewOrganigramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrganigramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrganigramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
