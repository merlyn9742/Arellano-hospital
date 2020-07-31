import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesShetComponent } from './expenses-shet.component';

describe('ExpensesShetComponent', () => {
  let component: ExpensesShetComponent;
  let fixture: ComponentFixture<ExpensesShetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensesShetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesShetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
