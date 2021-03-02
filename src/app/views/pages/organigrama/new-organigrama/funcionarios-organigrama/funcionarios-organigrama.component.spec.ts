import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosOrganigramaComponent } from './funcionarios-organigrama.component';

describe('FuncionariosOrganigramaComponent', () => {
  let component: FuncionariosOrganigramaComponent;
  let fixture: ComponentFixture<FuncionariosOrganigramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionariosOrganigramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionariosOrganigramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
