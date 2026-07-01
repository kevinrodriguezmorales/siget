import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateHour } from './date-hour';

describe('DateHour', () => {
  let component: DateHour;
  let fixture: ComponentFixture<DateHour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateHour],
    }).compileComponents();

    fixture = TestBed.createComponent(DateHour);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
