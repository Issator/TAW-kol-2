import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemJNComponent } from './orders-item-jn.component';

describe('OrdersItemJNComponent', () => {
  let component: OrdersItemJNComponent;
  let fixture: ComponentFixture<OrdersItemJNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersItemJNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemJNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
