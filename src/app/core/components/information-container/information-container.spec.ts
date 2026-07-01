import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationContainer } from './information-container';

describe('InformationContainer', () => {
  let component: InformationContainer;
  let fixture: ComponentFixture<InformationContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(InformationContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
