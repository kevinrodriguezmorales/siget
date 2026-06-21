import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelAccess } from './personnel-access';

describe('PersonnelAccess', () => {
  let component: PersonnelAccess;
  let fixture: ComponentFixture<PersonnelAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonnelAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonnelAccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
