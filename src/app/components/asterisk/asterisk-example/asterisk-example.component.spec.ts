import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteriskExampleComponent } from './asterisk-example.component';

describe('AsteriskExampleComponent', () => {
  let component: AsteriskExampleComponent;
  let fixture: ComponentFixture<AsteriskExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsteriskExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsteriskExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
