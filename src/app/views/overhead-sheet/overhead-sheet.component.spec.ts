import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverheadSheetComponent } from './overhead-sheet.component';

describe('OverheadSheetComponent', () => {
  let component: OverheadSheetComponent;
  let fixture: ComponentFixture<OverheadSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverheadSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverheadSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
