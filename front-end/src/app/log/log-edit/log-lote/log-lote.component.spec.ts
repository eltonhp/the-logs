import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogLoteComponent } from './log-lote.component';

describe('LogLoteComponent', () => {
  let component: LogLoteComponent;
  let fixture: ComponentFixture<LogLoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogLoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogLoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
