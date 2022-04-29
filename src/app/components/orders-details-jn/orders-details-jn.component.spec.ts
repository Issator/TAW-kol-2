import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsJNComponent } from './orders-details-jn.component';

describe('OrdersDetailsJNComponent', () => {
  let component: OrdersDetailsJNComponent;
  let fixture: ComponentFixture<OrdersDetailsJNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetailsJNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsJNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
