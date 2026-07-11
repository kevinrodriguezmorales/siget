import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceOrders } from './list-service-orders';

describe('ListServiceOrders', () => {
  let component: ListServiceOrders;
  let fixture: ComponentFixture<ListServiceOrders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListServiceOrders],
    }).compileComponents();

    fixture = TestBed.createComponent(ListServiceOrders);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
