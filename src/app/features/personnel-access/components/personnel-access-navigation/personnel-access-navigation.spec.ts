import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelAccessNavigation } from './personnel-access-navigation';

describe('PersonnelAccessNavigation', () => {
  let component: PersonnelAccessNavigation;
  let fixture: ComponentFixture<PersonnelAccessNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonnelAccessNavigation],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonnelAccessNavigation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
