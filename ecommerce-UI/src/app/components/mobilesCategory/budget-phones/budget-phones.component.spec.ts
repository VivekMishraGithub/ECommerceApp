import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetPhonesComponent } from './budget-phones.component';

describe('BudgetPhonesComponent', () => {
  let component: BudgetPhonesComponent;
  let fixture: ComponentFixture<BudgetPhonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetPhonesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
