import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleNavigation } from './module-navigation';

describe('ModuleNavigation', () => {
  let component: ModuleNavigation;
  let fixture: ComponentFixture<ModuleNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleNavigation],
    }).compileComponents();

    fixture = TestBed.createComponent(ModuleNavigation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
