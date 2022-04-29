import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersJNComponent } from './orders-jn.component';

describe('OrdersJNComponent', () => {
  let component: OrdersJNComponent;
  let fixture: ComponentFixture<OrdersJNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersJNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersJNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
