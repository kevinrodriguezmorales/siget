import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServiceOrder } from './create-service-order';

describe('CreateServiceOrder', () => {
  let component: CreateServiceOrder;
  let fixture: ComponentFixture<CreateServiceOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateServiceOrder],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateServiceOrder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
