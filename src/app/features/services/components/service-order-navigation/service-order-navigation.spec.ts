import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOrderNavigation } from './service-order-navigation';

describe('ServiceOrderNavigation', () => {
  let component: ServiceOrderNavigation;
  let fixture: ComponentFixture<ServiceOrderNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceOrderNavigation],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceOrderNavigation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
