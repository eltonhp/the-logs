import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogViewDialogComponent } from './log-view-dialog.component';

describe('LogViewDialogComponent', () => {
  let component: LogViewDialogComponent;
  let fixture: ComponentFixture<LogViewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogViewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
