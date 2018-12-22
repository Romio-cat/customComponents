import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduresPaginationComponent } from './procedures-pagination.component';

describe('ProceduresPaginationComponent', () => {
  let component: ProceduresPaginationComponent;
  let fixture: ComponentFixture<ProceduresPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProceduresPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProceduresPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
