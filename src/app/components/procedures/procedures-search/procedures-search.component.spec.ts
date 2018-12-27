import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduresSearchComponent } from './procedures-search.component';

describe('ProceduresSearchComponent', () => {
  let component: ProceduresSearchComponent;
  let fixture: ComponentFixture<ProceduresSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProceduresSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProceduresSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
